import { UnitValue } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepository/OEmbedRepositoryInterface.js';
import { ProviderRepositoryInterface } from './ProviderRepository/ProviderRepositoryInterface.js';

type OembedType = {
  height: UnitValue | null;
  width: UnitValue | null;
  html: String;
};

export { OembedType, OEmbedRepositoryInterface, ProviderRepositoryInterface };
