import {
  OEmbedRepositoryInterface,
  OembedType,
  ProviderRepositoryInterface,
} from '../../types.js';
import { LookupOEmbedInteractorInterface } from './LookupOEmbedInteractorInterface.js';

export class LookupOEmbedInteractorMock
  implements LookupOEmbedInteractorInterface
{
  providerRepository: ProviderRepositoryInterface;

  oEmbedRepository: OEmbedRepositoryInterface;

  return: OembedType = {
    height: null,
    width: null,
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
  async invoke(url: string): Promise<OembedType> {
    return this.return;
  }
}
