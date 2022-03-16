import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OEmbed } from '../src/OEmbed.js';
import '../src/o-embed.js';
import { LookupOEmbedInteractorMock } from '../src/interactors/LookupOEmbedInteractor/LookupOEmbedInteractorMock.js';
import { ProviderRepositoryMock } from '../src/repositories/ProviderRepository/ProviderRepositoryMock.js';
import { OEmbedRepositoryMock } from '../src/repositories/OEmbedRepository/OEmbedRepositoryMock.js';

describe('OEmbed', () => {
  it('render iframe srcdoc from api response html.', async () => {
    // Arrange
    const interactor = new LookupOEmbedInteractorMock(
      new ProviderRepositoryMock(''),
      new OEmbedRepositoryMock('')
    );
    const mockHtml = '<span>hello</span>';
    interactor.return = {
      html: mockHtml,
    };

    // Act
    const el = await fixture<OEmbed>(
      html`<o-embed .interactor=${interactor}></o-embed>`
    );

    // Assert
    await expect(
      el.shadowRoot?.querySelector('iframe')?.getAttribute('srcdoc')
    ).to.be.equal(mockHtml);
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
