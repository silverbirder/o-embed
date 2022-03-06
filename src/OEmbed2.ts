import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type oembedResponseType = any;

const oembedFetch = async (
  proxy: string,
  src: string
): Promise<oembedResponseType> =>
  (await fetch(`${proxy}/${src}`, { headers: { Origin: 'null' } })).json();

export class OEmbed2 extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--o-embed-text-color, #000);
    }
  `;

  @property({ type: String }) src = '';

  @property({ type: String }) proxy = 'https://cors-anywhere.herokuapp.com';

  render() {
    oembedFetch(this.proxy, this.src);
    return html`<div>
      <iframe
        title="content"
        srcdoc="${this.src}"
        loading="lazy"
        width="100%"
      ></iframe>
    </div>`;
  }
}
