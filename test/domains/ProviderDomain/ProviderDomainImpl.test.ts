import { expect } from '@open-wc/testing';
import { ProviderDomain } from '../../../src/domains/index.js';

describe('ProviderDomain', () => {
  const mockInput = {
    name: 'Twitter',
    url: 'http://www.twitter.com/',
    endpoints: [
      {
        schemes: ['https://twitter.com/*'],
        url: 'https://publish.twitter.com/oembed',
      },
    ],
  };
  it('create instance', async () => {
    // Arrange
    const name = 'Twitter';

    // Act
    const actual = new ProviderDomain({ ...mockInput, name });

    // Assert
    expect(actual.name).to.be.equal(name);
  });

  it('matchSchemeByUrl and match url.', async () => {
    // Arrange
    const providerDomain = new ProviderDomain(mockInput);

    // Act
    const actual = providerDomain.matchSchemeByUrl(
      'https://twitter.com/xxxx/status/xxxx'
    );

    // Assert
    expect(actual).to.be.equal(true);
  });

  it('matchSchemeByUrl and not match url.', async () => {
    // Arrange
    const providerDomain = new ProviderDomain(mockInput);

    // Act
    const actual = providerDomain.matchSchemeByUrl(
      'https://hoge.com/xxxx/status/xxxx'
    );

    // Assert
    expect(actual).to.be.equal(false);
  });
});
