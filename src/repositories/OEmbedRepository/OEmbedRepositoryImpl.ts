import { OembedType } from '../../types.js';
import { OEmbedRepositoryInterface } from './OEmbedRepositoryInterface.js';

export class OEmbedRepositoryImpl implements OEmbedRepositoryInterface {
  proxy: String = '';

  constructor(proxy: String) {
    this.proxy = proxy;
  }

  async invoke(src: String): Promise<OembedType> {
    return (
      await fetch(`${this.proxy}/${src}`, { headers: { Origin: 'null' } })
    ).json();
  }
}
