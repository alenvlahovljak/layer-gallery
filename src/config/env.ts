import pkg from '../../package.json';

export default {
  rootUrl: process.env['PUBLIC_URL'],
  environment: process.env['NODE_ENV'],
  isProduction: process.env['NODE_ENV'] == 'production',
  isTest: process.env['NODE_ENV'] == 'test',
  isDevelopment: process.env['NODE_ENV'] == 'development',
  app: {
    siteUrl: process.env['SITE_URL'],
    apiUrl: process.env['API_URL'],
    apiKey: process.env['API_KEY'],
    port: process.env['PORT'],
    version: pkg.version
  }
};
