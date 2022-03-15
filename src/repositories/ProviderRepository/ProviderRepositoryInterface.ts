// import { OembedType } from '../types.js';

export interface ProviderRepositoryInterface {
  invoke(src: string): Promise<any>;
}
