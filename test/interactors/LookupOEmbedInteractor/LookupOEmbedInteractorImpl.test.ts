import { expect } from '@open-wc/testing';
import { LookupOEmbedInteractor } from '../../../src/interactors/index.js';
import { OEmbedRepositoryMock } from '../../../src/repositories/OEmbedRepository/OEmbedRepositoryMock.js';
import { ProviderRepositoryMock } from '../../../src/repositories/ProviderRepository/ProviderRepositoryMock.js';
import providers from '../../repositories/ProviderRepository/providers.json' assert { type: 'json' };

describe('LookupOEmbedInteractor', () => {
  it('invoke and data is not exists.', async () => {
    // Arrange
    const providerRepository = new ProviderRepositoryMock('');
    providerRepository.providers = providers;
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
    expect(actual).to.be.property('html');
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
