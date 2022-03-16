import { ProviderType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  html: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  invoke(src: string): Promise<Array<ProviderType>> {
    return new Promise(resolve => {
      resolve([]);
    });
  }
}
