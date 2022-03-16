import { ProviderType } from '../types.js';

export interface ProviderRepositoryInterface {
  invoke(src: string): Promise<Array<ProviderType>>;
}
