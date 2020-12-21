// config/config.prod.js

module.exports = (appInfo) => {
  const config = (exports = {});
  config.apiUrl = {
    baseUrl: 'http://10.213.4.45:9101',
  };

  //   config.redis = {
  //     client: {
  //       port: 6379, // Redis port
  //       host: 'invoice-erp.qph9s8.ng.0001.cnw1.cache.amazonaws.com.cn', // Redis host
  //       password: '',
  //       db: 3,
  //     },
  //   };

  config.uploadDir = '/datadisk/static_temp';
  config.staticUrl = 'https://img.piaozone.com';
  return config;
};
