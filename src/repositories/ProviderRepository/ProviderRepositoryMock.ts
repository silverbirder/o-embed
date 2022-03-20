import { ProviderDomainInterface } from '../../domains/types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryMock implements ProviderRepositoryInterface {
  proxy: string = '';

  provider: string = '';

  providers: Array<ProviderDomainInterface> = [];

  constructor(proxy: string, provider?: string) {
    this.proxy = proxy;
    this.provider = provider || '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lookup(url: string): Promise<Array<ProviderDomainInterface>> {
    return new Promise(resolve => {
      resolve(this.providers);
    });
  }
}
