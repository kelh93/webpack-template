import { Controller } from 'egg';
// const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

export default HomeController;
// module.exports = HomeController;
