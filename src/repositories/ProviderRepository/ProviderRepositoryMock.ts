import { ProviderType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  html: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  invoke(src: string): Promise<Array<ProviderType>> {
    console.log(src);
    console.log(this.proxy);
    return new Promise(resolve => {
      resolve([]);
    });
  }
}
