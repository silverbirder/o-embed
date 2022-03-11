import { OEmbedRepositoryInterface } from './repositories/OEmbedRepositoryInterface.js';

type UnitSuffix = 'px' | 'em' | 'rem' | '%' | 'fr' | '';
type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;
type FlexGrowValue = Unit<''>;
type PixelValue = Unit<'px'>;
type EmValue = Unit<'em'>;
type RemValue = Unit<'rem'>;
type PercentValue = Unit<'%'>;
type FractionValue = Unit<'fr'>;
type UnitValue =
  | FlexGrowValue
  | PixelValue
  | EmValue
  | RemValue
  | PercentValue
  | FractionValue;

type OembedType = {
  height: UnitValue | null;
  width: UnitValue | null;
  html: String;
};

export { UnitValue, OembedType, OEmbedRepositoryInterface };
