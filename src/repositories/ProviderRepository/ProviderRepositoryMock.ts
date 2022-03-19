import { ProviderDomainInterface } from '../../domains/types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  providers: Array<ProviderDomainInterface> = [];

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lookup(url: string): Promise<Array<ProviderDomainInterface>> {
    return new Promise(resolve => {
      resolve(this.providers);
    });
  }
}
