import { UnitValue } from '../../utils/types.js';
import { OembedDomainInterface } from './OEmbedDomainInterface.js';

export class OembedDomainImpl implements OembedDomainInterface {
  html: string = '';

  height: UnitValue = '0px';

  width: UnitValue = '0px';

  providerName: string = '';

  constructor({
    html = '',
    height = '0px',
    width = '0px',
    providerName = '',
  }: {
    html?: string;
    height?: UnitValue;
    width?: UnitValue;
    providerName?: string;
  }) {
    this.html = html;
    this.height = height;
    this.width = width;
    this.providerName = providerName;
  }
}
