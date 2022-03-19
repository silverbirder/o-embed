import { expect } from '@open-wc/testing';
import { ProviderDomain } from '../../../src/domains/index.js';
import { LookupOEmbedInteractor } from '../../../src/interactors/index.js';
import { OEmbedRepositoryMock } from '../../../src/repositories/OEmbedRepository/OEmbedRepositoryMock.js';
import { ProviderRepositoryMock } from '../../../src/repositories/ProviderRepository/ProviderRepositoryMock.js';

describe('LookupOEmbedInteractor', () => {
  it('invoke and data is not exists.', async () => {
    // Arrange
    const providerRepository = new ProviderRepositoryMock('');
    providerRepository.providers = [
      new ProviderDomain({
        name: 'Twitter',
        url: 'http://www.twitter.com/',
        endpoints: [
          {
            schemes: [
              'https://twitter.com/*',
              'https://twitter.com/*/status/*',
              'https://*.twitter.com/*/status/*',
            ],
            url: 'https://publish.twitter.com/oembed',
          },
        ],
      }),
    ];
    const oEmbedRepository = new OEmbedRepositoryMock('');
    oEmbedRepository.html = '<span>hello</span>';
    const interactor = new LookupOEmbedInteractor(
      providerRepository,
      oEmbedRepository
    );

    // Act
    const actual = await interactor.invoke(
      'https://twitter.com/xxxx/status/xxxx'
    );

    // Assert
    expect(actual.html).to.be.eq('<span>hello</span>');
  });
  it('invoke and data is not exists.', async () => {
    // Arrange
    const interactor = new LookupOEmbedInteractor(
      new ProviderRepositoryMock(''),
      new OEmbedRepositoryMock('')
    );

    // Act
    const actual = await interactor.invoke('');

    // Assert
    expect(actual.html).to.be.eq('');
  });
});
