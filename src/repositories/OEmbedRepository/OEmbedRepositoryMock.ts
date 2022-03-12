import { OembedType } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

export class OEmbedRepositoryMock implements OEmbedRepositoryInterface {
  proxy: String = '';

  html: String = '';

  constructor(proxy: String) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invoke(src: String): Promise<OembedType> {
    return new Promise(resolve => {
      resolve({ html: this.html, width: '0px', height: '0px' });
    });
  }
}
