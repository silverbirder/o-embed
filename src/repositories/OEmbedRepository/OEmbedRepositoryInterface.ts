import { OembedDomain } from '../../domains/index.js';

export interface OEmbedRepositoryInterface {
  invoke(src: string): Promise<OembedDomain>;
}
