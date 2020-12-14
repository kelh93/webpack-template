// module.exports = (app) => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
// };

export default (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
