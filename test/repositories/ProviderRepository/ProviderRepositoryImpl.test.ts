import { expect } from '@open-wc/testing';
import { SinonStub, stub } from 'sinon';
import { ProviderRepository } from '../../../src/repositories/index.js';
import providers from './providers.json' assert { type: 'json' };

const jsonOk = (body: any) => {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return Promise.resolve(mockResponse);
};

describe('ProviderRepositoryImpl', () => {
  let fetch: SinonStub<any>;
  beforeEach(() => {
    fetch = stub(window, 'fetch');
  });
  afterEach(() => {
    fetch.restore();
  });
  it('invoke and data is exists.', async () => {
    // Arrange
    fetch.onCall(0).returns(jsonOk(providers));
    const repository = new ProviderRepository('');

    // Act
    const actuals = await repository.lookup(
      'https://twitter.com/xxxx/status/xxxx'
    );

    // Assert
    expect(actuals[0]).to.be.contain({ provider_name: 'Twitter' });
  });

  it('invoke and data is not exists.', async () => {
    // Arrange
    fetch.onCall(0).returns(jsonOk(providers));
    const repository = new ProviderRepository('');

    // Act
    const actuals = await repository.lookup('');

    // Assert
    expect(actuals).to.be.length(0);
  });
});
