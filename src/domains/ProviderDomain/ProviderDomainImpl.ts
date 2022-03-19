import {
  ProviderDomainInterface,
  ProviderEndpoint,
} from './ProviderDomainInterface.js';

export class ProviderDomainImpl implements ProviderDomainInterface {
  name: string = '';

  url: string = '';

  endpoints: Array<ProviderEndpoint> = [];

  constructor({
    name = '',
    url = '',
    endpoints = [],
  }: {
    name: string;
    url: string;
    endpoints: Array<ProviderEndpoint>;
  }) {
    this.name = name;
    this.url = url;
    this.endpoints = endpoints;
  }

  matchSchemeByUrl(url: string): boolean {
    return (
      this.endpoints.filter(
        (e: ProviderEndpoint) =>
          e?.schemes?.filter((s: string) => {
            const re = new RegExp(s);
            return re.test(url);
          }).length > 0
      ).length > 0
    );
  }
}
