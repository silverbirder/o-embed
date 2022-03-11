import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { OEmbedRepositoryInterface, OembedType, UnitValue } from './types.js';

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

  @property({ type: Object }) repository: OEmbedRepositoryInterface | undefined;

  async connectedCallback() {
    super.connectedCallback();
    console.log(this._oembed);
    console.log(this.repository);
    this._oembed = await this.repository?.invoke(this.src);
    console.log(this._oembed);
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
