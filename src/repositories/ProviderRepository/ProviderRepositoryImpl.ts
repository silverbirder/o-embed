import { ProviderDomain } from '../../domains/index.js';
import { ProviderDomainInterface } from '../../domains/types.js';
import { ProviderType } from '../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

export class ProviderRepositoryImpl implements ProviderRepositoryInterface {
  proxy: string = '';

  provider: string = '';

  constructor(proxy: string, provider?: string) {
    this.proxy = proxy;
    this.provider = provider || 'https://oembed.com/providers.json';
  }

  async _fetch(): Promise<Array<ProviderType>> {
    const jsons = await (
      await fetch(`${this.proxy}/${this.provider}`, {
        headers: { Origin: 'null' },
      })
    ).json();
    return jsons.map((json: any) => ({
      providerName: json.provider_name,
      providerUrl: json.provider_url,
      endpoints: json.endpoints,
    }));
  }

  async lookup(url: string): Promise<Array<ProviderDomainInterface>> {
    const response = await this._fetch();
    const providerDomains = response.map(
      r =>
        new ProviderDomain({
          name: r.providerName,
          url: r.providerUrl,
          endpoints: r.endpoints,
        })
    );
    return providerDomains.filter((p: ProviderDomainInterface) =>
      p.matchSchemeByUrl(url)
    );
  }
}
