import config from '../config/index';

function getUrlWithParamsConfig(endpointConfig: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, value) => {
    if (acc.indexOf(`{${value}}`) !== -1) {
      const result = acc.replace(`{${value}}`, query[value]);
      // eslint-disable-next-line no-param-reassign
      delete query[value];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = { ...query };

  return url;
}

export default getUrlWithParamsConfig;
