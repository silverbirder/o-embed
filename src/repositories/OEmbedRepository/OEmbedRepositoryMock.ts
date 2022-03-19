import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';
import { OembedDomain } from '../../domains/index.js';

export class OEmbedRepositoryMock implements OEmbedRepositoryInterface {
  proxy: string = '';

  html: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invoke(src: string): Promise<OembedDomain> {
    return new Promise(resolve => {
      resolve({ html: this.html, width: '0px', height: '0px' });
    });
  }
}
