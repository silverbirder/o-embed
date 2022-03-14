import { expect } from '@open-wc/testing';
import { SinonStub, stub } from 'sinon';
import { ProviderRepository } from '../../../src/repositories/index.js';

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
    fetch.onCall(0).returns(jsonOk([]));
  });
  afterEach(() => {
    fetch.restore();
  });
  it('invoke', async () => {
    const repository = new ProviderRepository('');

    const actual = await repository.invoke('');

    expect(actual).to.be.length(0);
  });
});
