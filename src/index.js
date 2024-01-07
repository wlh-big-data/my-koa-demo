const Koa = require('koa');
const router = require('./route/student');
const app = new Koa();

 
// get 传值

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000');
});