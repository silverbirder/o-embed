import { UnitValue } from '../../utils/types.js';
import { OembedDomainInterface } from './OEmbedDomainInterface.js';

export class OembedDomainImpl implements OembedDomainInterface {
  html: string = '';

  height: UnitValue = '0px';

  width: UnitValue = '0px';

  constructor({
    html = '',
    height = '0px',
    width = '0px',
  }: {
    html?: string;
    height?: UnitValue;
    width?: UnitValue;
  }) {
    this.html = html;
    this.height = height;
    this.width = width;
  }
}
