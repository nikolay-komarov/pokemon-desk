import config from '../config/index';

function getUrlWithParamsConfig(endpointConfig: string) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  };
}

export default getUrlWithParamsConfig;
