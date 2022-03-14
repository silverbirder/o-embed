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
  it('invoke', async () => {
    fetch.onCall(0).returns(jsonOk(providers));
    const repository = new ProviderRepository('');

    const actual = await repository.invoke(
      'https://twitter.com/xxxx/status/xxxx'
    );

    console.log(actual);
    expect(actual).to.be.length(1);
  });
});
