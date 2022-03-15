import { OembedType } from '../types.js';

export interface OEmbedRepositoryInterface {
  invoke(src: string): Promise<OembedType>;
}
