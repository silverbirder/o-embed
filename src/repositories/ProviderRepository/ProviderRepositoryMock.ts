// import { OembedType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: String = '';

  html: String = '';

  constructor(proxy: String) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invoke(src: String): Promise<any> {
    return new Promise(resolve => {
      resolve({ html: this.html, width: '0px', height: '0px' });
    });
  }
}
