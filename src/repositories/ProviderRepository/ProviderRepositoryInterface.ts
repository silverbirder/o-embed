import { ProviderDomainInterface } from '../../domains/types.js';

export interface ProviderRepositoryInterface {
  proxy: string;
  provider?: string;
  lookup(url: string): Promise<Array<ProviderDomainInterface>>;
}
