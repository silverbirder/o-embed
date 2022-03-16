import { UnitValue } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepository/OEmbedRepositoryInterface.js';
import { ProviderRepositoryInterface } from './ProviderRepository/ProviderRepositoryInterface.js';

type OembedType = {
  height: UnitValue | null;
  width: UnitValue | null;
  html: string;
};

type EndpointType = {
  schemes: Array<string>;
  url: string;
};

type ProviderType = {
  providerName: string;
  providerUrl: string;
  endpoints: Array<EndpointType>;
};

export {
  OembedType,
  OEmbedRepositoryInterface,
  ProviderRepositoryInterface,
  ProviderType,
  EndpointType,
};
