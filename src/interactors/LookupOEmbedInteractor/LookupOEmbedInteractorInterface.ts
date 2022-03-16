import {
  OEmbedRepositoryInterface,
  OembedType,
  ProviderRepositoryInterface,
} from '../../types.js';

export interface LookupOEmbedInteractorInterface {
  providerRepository: ProviderRepositoryInterface;
  oEmbedRepository: OEmbedRepositoryInterface;
  invoke(src: string): Promise<OembedType | {}>;
}
