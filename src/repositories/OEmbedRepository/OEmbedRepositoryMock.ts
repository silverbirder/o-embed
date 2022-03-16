import { OembedType } from '../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

export class OEmbedRepositoryMock implements OEmbedRepositoryInterface {
  proxy: string = '';

  html: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  invoke(src: string): Promise<OembedType> {
    return new Promise(resolve => {
      resolve({ html: '', width: '0px', height: '0px' });
    });
  }
}
