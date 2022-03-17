import { OembedType } from '../../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

export class OEmbedRepositoryImpl implements OEmbedRepositoryInterface {
  proxy: string = '';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  async invoke(src: string): Promise<OembedType> {
    return (
      await fetch(`${this.proxy}/${src}`, { headers: { Origin: 'null' } })
    ).json();
  }
}
