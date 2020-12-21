module.exports = (app) => {
  const { router, controller } = app;
  // 首页
  router.get('/imgasst-web/*', controller.home.index);
};
