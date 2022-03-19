import { wildcardToRegExp } from '../../utils/Utils.js';
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
    return this._filterEndpoints(url).length > 0;
  }

  getUrlByMatchScheme(url: string): string {
    const matchedEndpoints = this._filterEndpoints(url);
    return matchedEndpoints.length > 0 ? matchedEndpoints[0].url : '';
  }

  _filterEndpoints(url: string): Array<ProviderEndpoint> {
    return this.endpoints.filter(
      (e: ProviderEndpoint) =>
        e?.schemes?.filter((s: string) => wildcardToRegExp(s).test(url))
          .length > 0
    );
  }
}
