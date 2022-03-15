// import { OembedType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  html: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invoke(src: string): Promise<any> {
    return new Promise(resolve => {
      resolve({ html: this.html, width: '0px', height: '0px' });
    });
  }
}
