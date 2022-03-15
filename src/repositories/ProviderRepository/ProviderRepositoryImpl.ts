// import { OembedType } from '../../types.js';
import { ProviderRepositoryInterface } from './ProviderRepositoryInterface.js';

type EndpointType = {
  schemes: Array<string>;
  url: string;
};

type ProviderType = {
  providerName: string;
  providerUrl: string;
  endpoints: Array<EndpointType>;
};

export class ProviderRepositoryImpl implements ProviderRepositoryInterface {
  proxy: string = '';

  provider: string = 'https://oembed.com/providers.json';

  constructor(proxy: string) {
    this.proxy = proxy;
  }

  async invoke(src: string): Promise<any> {
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
