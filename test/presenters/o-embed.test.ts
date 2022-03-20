import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import { OEmbed } from '../../src/presenters/OEmbed.js';
import '../../src/o-embed.js';
import { LookupOEmbedInteractorMock } from '../../src/interactors/LookupOEmbedInteractor/LookupOEmbedInteractorMock.js';
import { ProviderRepositoryMock } from '../../src/repositories/ProviderRepository/ProviderRepositoryMock.js';
import { OEmbedRepositoryMock } from '../../src/repositories/OEmbedRepository/OEmbedRepositoryMock.js';

describe('OEmbed', () => {
  it('render iframe srcdoc from api response html.', async () => {
    // Arrange
    const interactor = new LookupOEmbedInteractorMock(
      new ProviderRepositoryMock(''),
      new OEmbedRepositoryMock('')
    );
    const mockHtml = '<span>hello</span>';
    interactor.return = {
      height: '0px',
      width: '0px',
      html: mockHtml,
    };

    // Act
    const el = await fixture<OEmbed>(
      html`<o-embed ._interactor=${interactor}></o-embed>`
    );

    // Assert
    await expect(
      el.shadowRoot?.querySelector('iframe')?.getAttribute('srcdoc')
    ).to.be.equal(mockHtml);
  });

  it('loading status is loading.', async () => {
    // Arrange
    const interactor = new LookupOEmbedInteractorMock(
      new ProviderRepositoryMock(''),
      new OEmbedRepositoryMock('')
    );
    const mockHtml = '<span>hello</span>';
    interactor.return = {
      height: '0px',
      width: '0px',
      html: mockHtml,
    };
    const el = await fixture<OEmbed>(
      html`<o-embed ._interactor=${interactor}>
        <p slot="loading">Loading...</p>
        <p slot="error">Error</p>
      </o-embed>`
    );

    // Act
    el._status = 'loading';
    await elementUpdated(el);

    // Assert
    await expect(
      el.shadowRoot?.querySelector('slot')?.getAttribute('name')
    ).to.be.equal('loading');
  });

  it('loading status is error.', async () => {
    // Arrange
    const interactor = new LookupOEmbedInteractorMock(
      new ProviderRepositoryMock(''),
      new OEmbedRepositoryMock('')
    );
    const mockHtml = '<span>hello</span>';
    interactor.return = {
      height: '0px',
      width: '0px',
      html: mockHtml,
    };
    const el = await fixture<OEmbed>(
      html`<o-embed ._interactor=${interactor}>
        <p slot="loading">Loading...</p>
        <p slot="error">Error</p>
      </o-embed>`
    );

    // Act
    el._status = 'error';
    await elementUpdated(el);

    // Assert
    await expect(
      el.shadowRoot?.querySelector('slot')?.getAttribute('name')
    ).to.be.equal('error');
  });
});
