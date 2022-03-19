type EndpointType = {
  schemes: Array<string>;
  url: string;
};

type ProviderType = {
  providerName: string;
  providerUrl: string;
  endpoints: Array<EndpointType>;
};

export { ProviderType, EndpointType };
