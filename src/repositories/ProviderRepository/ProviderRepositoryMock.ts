import { ProviderType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  providers: Array<any> = [];

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invoke(src: string): Promise<Array<ProviderType>> {
    return new Promise(resolve => {
      resolve(this.providers);
    });
  }
}
