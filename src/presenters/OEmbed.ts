import { html, css, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { OembedDomainInterface } from '../domains/types.js';
import { LookupOEmbedInteractor } from '../interactors/index.js';
import { LookupOEmbedInteractorInterface } from '../interactors/types.js';
import { OEmbedRepository, ProviderRepository } from '../repositories/index.js';
import { UnitValue } from '../utils/types.js';
import { Status } from './types.js';

export class OEmbed extends LitElement {
  static styles = css`
    .container {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    .responsive {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    iframe {
      border: none;
    }
  `;

  @property({ type: String }) src = '';

  @property({ type: String }) height: UnitValue | undefined;

  @property({ type: String }) width: UnitValue | undefined;

  @property({ type: String }) proxy: string = '';

  @property({ type: String }) provider: string = '';

  @property({ type: Object }) _oembed: OembedDomainInterface | undefined;

  @property({ type: String }) _status: Status = 'loading';

  _interactor: LookupOEmbedInteractorInterface | undefined;

  async connectedCallback() {
    super.connectedCallback();
    if (!this.proxy || !this.src) {
      this.remove();
      return;
    }
    if (this._interactor === undefined) {
      this._interactor = new LookupOEmbedInteractor(
        new ProviderRepository(this.proxy, this.provider),
        new OEmbedRepository(this.proxy)
      );
    }
    await this._updateOEmbed();
  }

  async willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('src') || changedProperties.has('proxy'))
      await this._updateOEmbed();
  }

  async _updateOEmbed() {
    this._status = 'loading';
    this._interactor
      ?.invoke(this.src)
      .then(oembed => {
        if (oembed.html === '') {
          this._status = 'notFound';
          return;
        }
        this._oembed = oembed;
        this._status = 'loaded';
      })
      .catch(() => {
        this._status = 'error';
      });
  }

  switchRender() {
    const width = this.width ? this.width : this._oembed?.width;
    const height = this.height ? this.height : this._oembed?.height;

    switch (this._status) {
      case 'loading':
        return html` <slot name="loading"></slot>`;
      case 'notFound':
        return html` <slot name="notFound"></slot>`;
      case 'error':
        return html` <slot name="error"></slot>`;
      default:
        return html`<iframe
          class="responsive"
          title="content"
          srcdoc="${this._oembed?.html}"
          loading="lazy"
          width="${width}"
          height="${height}"
        ></iframe>`;
    }
  }

  containerRender() {
    const width = this.width ? this.width : this._oembed?.width;
    const height = this.height ? this.height : this._oembed?.height;
    const iframeCss = [];
    iframeCss.push(`padding-left: ${width};`);
    iframeCss.push(`padding-top: ${height};`);

    return html`<div class="container" style="${iframeCss.join('')}">
      ${this.switchRender()}
    </div>`;
  }

  render() {
    return this.containerRender();
  }
}
