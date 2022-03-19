import { ProviderType, EndpointType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryImpl implements ProviderRepositoryInterface {
  proxy: string = '';

  provider: string = 'https://oembed.com/providers.json';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  async lookup(src: string): Promise<Array<ProviderType>> {
    const providers: Array<ProviderType> = await (
      await fetch(`${this.proxy}/${this.provider}`, {
        headers: { Origin: 'null' },
      })
    ).json();
    return providers
      .map((p: ProviderType): ProviderType => {
        const endpoints = p.endpoints.filter(
          (e: EndpointType) =>
            e?.schemes?.filter((s: string) => {
              const re = new RegExp(s);
              return re.test(src);
            }).length > 0
        );
        return {
          ...p,
          endpoints,
        };
      })
      .filter((p: ProviderType) => p.endpoints.length > 0);
  }
}
