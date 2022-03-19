import { expect } from '@open-wc/testing';
import { SinonStub, stub } from 'sinon';
import { OEmbedRepository } from '../../../src/repositories/index.js';
import oembed from './oembed.json' assert { type: 'json' };

const jsonOk = (body: any) => {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return Promise.resolve(mockResponse);
};

describe('OEmbedRepository', () => {
  let fetch: SinonStub<any>;
  beforeEach(() => {
    fetch = stub(window, 'fetch');
  });
  afterEach(() => {
    fetch.restore();
  });
  it('invoke and data is exists.', async () => {
    // Arrange
    fetch.onCall(0).returns(jsonOk(oembed));
    const repository = new OEmbedRepository('');

    // Act
    const actual = await repository.invoke('');

    // Assert
    expect(actual).to.be.property('html');
  });

  it('invoke and data is not exists.', async () => {
    // Arrange
    fetch.onCall(0).returns(jsonOk({}));
    const repository = new OEmbedRepository('');

    // Act
    const actual = await repository.invoke('');

    // Assert
    expect(actual.html).to.be.equal('');
  });
});
