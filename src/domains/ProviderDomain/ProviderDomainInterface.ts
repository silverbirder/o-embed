export type ProviderEndpoint = {
  schemes: Array<string>;
  url: string;
};

export interface ProviderDomainInterface {
  name: string;
  url: string;
  endpoints: Array<ProviderEndpoint>;
  matchSchemeByUrl(url: string): boolean;
  getUrlByMatchScheme(url: string): string;
}
