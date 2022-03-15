import {
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
} from '../types.js';

export class LookupOEmbedInteractor {
  providerRepository: ProviderRepositoryInterface;

  oEmbedRepository: OEmbedRepositoryInterface;

  constructor(
    providerRepository: ProviderRepositoryInterface,
    oEmbedRepository: OEmbedRepositoryInterface
  ) {
    this.providerRepository = providerRepository;
    this.oEmbedRepository = oEmbedRepository;
  }

  async invoke(url: string): Promise<any> {
    const j = await this.providerRepository.invoke(url);
    if (j.length === 0) return {};
    const oembedSrc = `${j[0].endpoints[0].url}?url=${url}`;
    return this.oEmbedRepository?.invoke(oembedSrc);
  }
}
