const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { config } = ctx.app;
    const env = config.env; // 运行环境
    console.log('env', env);
    const debug = ctx.request.query.debug;
    let webpackPublicPath = config.staticUrl + config.__webpack_public_path__;
    if (env === 'local') {
      webpackPublicPath = config.__webpack_public_path__;
    } else if (env !== 'prod' && !!debug) {
      webpackPublicPath += '/debug';
    }

    let staticUrl = config.staticUrl;
    let realPath = ctx.request.header['pwy-private-base'];
    ctx.logger.info('pwy-private-base-home', realPath);
    if (realPath) {
      // 私有化用自己的域名访问
      staticUrl = realPath;
      webpackPublicPath = realPath + '/static/image-asst';
    }
    const initialData = {
      title: '影像助手',
      pageDirName: config.pageDirName || '',
      webpackPublicPath,
      staticUrl,
    };
    await this.ctx.render('template.html', initialData);
  }
}

module.exports = HomeController;
