import { ProviderType } from '../types.js';

export interface ProviderRepositoryInterface {
  lookup(src: string): Promise<Array<ProviderType>>;
}
