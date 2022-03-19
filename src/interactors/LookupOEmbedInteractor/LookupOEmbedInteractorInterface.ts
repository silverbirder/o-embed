import { OembedDomainInterface } from '../../domains/types.js';
import {
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
} from '../../repositories/types.js';

export interface LookupOEmbedInteractorInterface {
  providerRepository: ProviderRepositoryInterface;
  oEmbedRepository: OEmbedRepositoryInterface;
  invoke(src: string): Promise<OembedDomainInterface>;
}
