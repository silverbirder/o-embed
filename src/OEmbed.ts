import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type UnitSuffix = 'px' | 'em' | 'rem' | '%' | 'fr' | '';
type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;
type FlexGrowValue = Unit<''>;
type PixelValue = Unit<'px'>;
type EmValue = Unit<'em'>;
type RemValue = Unit<'rem'>;
type PercentValue = Unit<'%'>;
type FractionValue = Unit<'fr'>;
type UnitValue =
  | FlexGrowValue
  | PixelValue
  | EmValue
  | RemValue
  | PercentValue
  | FractionValue;

type OembedType = {
  height: UnitValue | null;
  width: UnitValue | null;
  html: string;
};

type RenderType = 'default' | 'iframe';

const oembedFetch = async (proxy: string, src: string): Promise<OembedType> =>
  (await fetch(`${proxy}/${src}`, { headers: { Origin: 'null' } })).json();

export class OEmbed extends LitElement {
  static styles = css`
    iframe {
      border: none;
    }
  `;

  @property({ type: String }) src = '';

  @property({ type: String }) proxy =
    'https://silverbirder-cors-anywhere.herokuapp.com';

  @property({ type: Object }) oembed: OembedType = {
    height: null,
    width: null,
    html: '',
  };

  @property({ type: String }) height: UnitValue = '0px';

  @property({ type: String }) width: UnitValue = '0px';

  @property({ type: String }) renderType: RenderType = 'default';

  async connectedCallback() {
    super.connectedCallback();
    this.oembed = await oembedFetch(this.proxy, this.src);
  }

  render() {
    if (this.renderType === 'iframe') {
      return html` <iframe
        title="content"
        srcdoc="${this.oembed.html}"
        loading="lazy"
        width="${this.oembed.width ? this.oembed.width : this.width}"
        height="${this.oembed.height ? this.oembed.height : this.height}"
      ></iframe>`;
    }
    return html`<div>${unsafeHTML(this.oembed.html)}</div>`;
  }
}
