const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cacheGroupsVendor = /(react|react-dom|recoil|immer)/;
const cacheGroupsLibs = /antd/;
const useCache = false;
const eslintrc = path.resolve(__dirname, '../.eslintrc.js');
const eslintignore = path.resolve(__dirname, '../.eslintignore');
const fixJs = false;

const buildConfig = require('./buildConfig');
const { disableEslint } = buildConfig;

const reg = '/imgasst-web';

function getRules() {
  let rulesArr = [
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: useCache,
            cacheCompression: useCache
          }
        }
      ]
    },
    {
      // 参考https://webpack.js.org/guides/asset-modules/#root
      test: /\.(png|jpg|jpeg)/,
      type: 'asset/inline' // 相当于 url-loader,小图片处理成base64
    },
    {
      test: /\.(css|less)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
              modifyVars: {
                'primary-color': '#1890ff',
                'link-color': '#1890ff',
                'border-radius-base': '2px'
              },
              javascriptEnabled: true
            }
          }
        }
      ]
    }
  ];
  // 是否禁用eslint
  if (!disableEslint) {
    rulesArr.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: [
        {
          loader: 'eslint-loader',
          options: {
            fix: fixJs,
            cache: useCache,
            failOnError: true,
            resolvePluginsRelativeTo: path.resolve(__dirname),
            configFile: eslintrc,
            ignorePath: eslintignore
          }
        }
      ]
    });
  }
  return rulesArr;
}

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../app/client/index.js')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 6001,
    historyApiFallback: true,
    proxy: {
      [reg]: {
        // PAGE_PRE_PATH页面开始的路径全部访问html
        target: 'http://localhost:6001/index.html',
        changeOrigin: true,
        bypass: function (req, res, proxyOptions) {
          return '/index.html';
        }
      }
    }
  },
  module: {
    rules: getRules()
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/client/index.html'),
      filename: 'index.html',
      chunks: ['vendor', 'libs', 'commons', 'index']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 100000,
      maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
      maxInitialRequests: 3, // 最大初始化请求数
      minChunks: 1,
      automaticNameDelimiter: '-',
      cacheGroups: {
        default: false,
        // 去掉恶心的一大串默认vendors-node_modules_object-assign_index_js-node_modules_scheduler_index_js-node_modules_sche-b75d54.js
        defaultVendors: false,
        vendor: {
          chunks: 'initial',
          test: cacheGroupsVendor,
          priority: 15,
          name: 'vendor',
          enforce: true,
          minChunks: 1,
          reuseExistingChunk: true,
          maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
          maxInitialRequests: 3 // 最大初始化请求数
        },
        libs: {
          chunks: 'initial',
          test: cacheGroupsLibs,
          priority: 12,
          name: 'libs',
          minChunks: 1,
          enforce: true,
          reuseExistingChunk: true,
          maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
          maxInitialRequests: 3 // 最大初始化请求数
        },
        commons: {
          chunks: 'all',
          minChunks: 6,
          name: 'commons',
          priority: 5,
          maxSize: 409600, //240 Kib
          maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
          maxInitialRequests: 3 // 最大初始化请求数
        }
      }
    }
  }
};
