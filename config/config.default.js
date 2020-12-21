module.exports = (app) => {
  let exports = {};
  let config = exports;
  config.keys = 'klh';
  // 静态资源加载地址
  config.staticUrl = 'http://localhost:6001';
  config.__webpack_public_path__ = '/static/image-asst';
  //   config.historyApiFallback = {
  //     enable: true,
  //     package: 'egg-history-api-fallback'
  //   };
  // html模板
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks'
    }
  };
  return config;
};
