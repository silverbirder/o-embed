import sinon from 'sinon';
import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OEmbed } from '../src/OEmbed.js';
import '../src/o-embed.js';

describe('OEmbed', () => {
  before('', () => {
    const mockApiResponse = (body = {}) =>
      new window.Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      });
    const f = sinon.fake.returns(
      Promise.resolve(
        mockApiResponse({
          body: {
            height: '100px',
            width: '100px',
            html: '<span>hello</span>',
          },
        })
      )
    );
    sinon.replace(window, 'fetch', f);
  });
  after('', () => {
    sinon.restore();
  });
  it('has a default title "Hey there" and counter 5', async () => {
    const src =
      'http://hatenablog.com/oembed?url=http://staff.hatenablog.com/entry/2014/08/29/141633';
    const el = await fixture<OEmbed>(html`<o-embed src="${src}"></o-embed>`);
    expect(el).shadowDom.to.equal('<div></div>');
  });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<OEmbed>(html`<o-embed></o-embed>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture<OEmbed>(
  //     html`<o-embed title="attribute title"></o-embed>`
  //   );

  //   expect(el.title).to.equal('attribute title');
  // });

  // it('passes the a11y audit', async () => {
  //   const el = await fixture<OEmbed>(html`<o-embed></o-embed>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
