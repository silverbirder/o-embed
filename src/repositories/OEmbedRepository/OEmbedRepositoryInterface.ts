import { OembedDomain } from '../../domains/index.js';

export interface OEmbedRepositoryInterface {
  get(src: string): Promise<OembedDomain>;
}
