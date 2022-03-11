import { OembedType } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

export class OEmbedRepositoryMock implements OEmbedRepositoryInterface {
  proxy: String = '';

  constructor(proxy: String) {
    this.proxy = proxy;
  }

  invoke(src: String): Promise<OembedType> {
    console.log(this.proxy);
    return new Promise(resolve => {
      resolve({ html: `${src}`, width: '0px', height: '0px' });
    });
  }
}
