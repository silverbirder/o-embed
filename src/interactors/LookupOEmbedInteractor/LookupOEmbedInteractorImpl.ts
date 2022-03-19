import { OembedDomain } from '../../domains/index.js';
import { OembedDomainInterface } from '../../domains/types.js';
import {
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
} from '../../repositories/types.js';
import { LookupOEmbedInteractorInterface } from './LookupOEmbedInteractorInterface.js';

export class LookupOEmbedInteractorImpl
  implements LookupOEmbedInteractorInterface
{
  providerRepository: ProviderRepositoryInterface;

  oEmbedRepository: OEmbedRepositoryInterface;

  constructor(
    providerRepository: ProviderRepositoryInterface,
    oEmbedRepository: OEmbedRepositoryInterface
  ) {
    this.providerRepository = providerRepository;
    this.oEmbedRepository = oEmbedRepository;
  }

  async invoke(url: string): Promise<OembedDomainInterface> {
    const providers = await this.providerRepository.invoke(url);
    if (providers.length === 0 || providers[0].endpoints.length === 0) {
      return new OembedDomain({});
    }
    return this.oEmbedRepository?.invoke(
      `${providers[0].endpoints[0].url}?url=${url}`
    );
  }
}
