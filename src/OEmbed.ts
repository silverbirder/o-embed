import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { OEmbedRepository, ProviderRepository } from './repositories/index.js';
import {
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
  OembedType,
  UnitValue,
} from './types.js';

export class OEmbed extends LitElement {
  static styles = css`
    iframe {
      border: none;
    }
  `;

  @property({ type: String }) src = '';

  @property({ type: Object }) _oembed: OembedType | undefined;

  @property({ type: String }) height: UnitValue | undefined;

  @property({ type: String }) width: UnitValue | undefined;

  @property({ type: String }) proxy: String = '';

  @property({ type: Object }) repository: OEmbedRepositoryInterface | undefined;

  @property({ type: Object }) providerRepository:
    | ProviderRepositoryInterface
    | undefined;

  async connectedCallback() {
    super.connectedCallback();
    if (this.repository === undefined) {
      this.repository = new OEmbedRepository(this.proxy);
    }
    if (this.providerRepository === undefined) {
      this.providerRepository = new ProviderRepository(this.proxy);
    }
    const j = await this.providerRepository?.invoke(this.src);
    if (j.length > 0) {
      const oembedSrc = `${j[0].endpoints[0].url}?url=${encodeURIComponent(
        this.src
      )}`;
      this._oembed = await this.repository?.invoke(oembedSrc);
    }
  }

  render() {
    return html`<iframe
      title="content"
      srcdoc="${this._oembed?.html}"
      loading="lazy"
      width="${this.width ? this.width : this._oembed?.width}"
      height="${this.height ? this.height : this._oembed?.height}"
    ></iframe>`;
  }
}
