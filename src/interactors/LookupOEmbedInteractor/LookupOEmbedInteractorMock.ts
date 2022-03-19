import { OembedDomainInterface } from '../../domains/types.js';
import {
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
} from '../../repositories/types.js';
import { LookupOEmbedInteractorInterface } from './LookupOEmbedInteractorInterface.js';

export class LookupOEmbedInteractorMock
  implements LookupOEmbedInteractorInterface
{
  providerRepository: ProviderRepositoryInterface;

  oEmbedRepository: OEmbedRepositoryInterface;

  return: OembedDomainInterface = {
    height: '0px',
    width: '0px',
    html: '',
  };

  constructor(
    providerRepository: ProviderRepositoryInterface,
    oEmbedRepository: OEmbedRepositoryInterface
  ) {
    this.providerRepository = providerRepository;
    this.oEmbedRepository = oEmbedRepository;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  async invoke(url: string): Promise<OembedDomainInterface> {
    return this.return;
  }
}
