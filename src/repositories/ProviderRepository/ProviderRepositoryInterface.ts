import { ProviderDomainInterface } from '../../domains/types.js';

export interface ProviderRepositoryInterface {
  lookup(url: string): Promise<Array<ProviderDomainInterface>>;
}
