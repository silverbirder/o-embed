import { UnitValue } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

type OembedType = {
  height: UnitValue | null;
  width: UnitValue | null;
  html: String;
};

export { OembedType, OEmbedRepositoryInterface };
