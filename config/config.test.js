// config/config.test.js
module.exports = (appInfo) => {
  let exports = {};
  const config = exports;
  // 测试环境新增test前缀
  config.pageDirName = '/test';
  // 接口地址
  config.apiUrl = {
    baseUrl: 'http://10.244.4.80:9104',
  };
  // 测试环境redis
  //   config.redis = {
  //     client: {
  //       port: 6379,
  //       host: '10.244.4.78',
  //       password: 'kingdee',
  //       db: 9,
  //     },
  //   };
  config.staticUrl = 'https://imgshow-master.piaozone.com';
  return config;
};
