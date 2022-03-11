import { OembedType } from '../types.js';

export interface OEmbedRepositoryInterface {
  invoke(src: String): Promise<OembedType>;
}
