import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { OembedType, UnitValue } from './types.js';

const oembedFetch = async (proxy: string, src: string): Promise<OembedType> =>
  (await fetch(`${proxy}/${src}`, { headers: { Origin: 'null' } })).json();

export class OEmbed extends LitElement {
  static styles = css`
    iframe {
      border: none;
    }
  `;

  @property({ type: String }) src = '';

  @property({ type: String }) proxy: string =
    'https://silverbirder-cors-anywhere.herokuapp.com';

  @property({ type: Object }) oembed: OembedType | undefined;

  @property({ type: String }) height: UnitValue | undefined;

  @property({ type: String }) width: UnitValue | undefined;

  async connectedCallback() {
    super.connectedCallback();
    this.oembed = await oembedFetch(this.proxy, this.src);
  }

  render() {
    return html`<iframe
      title="content"
      srcdoc="${this.oembed?.html}"
      loading="lazy"
      width="${this.width ? this.width : this.oembed?.width}"
      height="${this.height ? this.height : this.oembed?.height}"
    ></iframe>`;
  }
}
