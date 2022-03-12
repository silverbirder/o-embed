// import { OembedType } from '../types.js';

export interface ProviderRepositoryInterface {
  invoke(src: String): Promise<any>;
}
