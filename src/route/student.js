// route/api.ts
const Router = require('koa-router');
const studentModel = require("../model/student");

const router = new Router();

router.get("/student/:id",async(ctx,next)=>{
  let name = ctx.request.query.name  //获取传递过来的数据 返回如 { a:1, b:2 }
  console.log(name);
  let data = await studentModel.find({name:name}) //根据传递的name 查找对应的学生信息
  ctx.body = {
    data
  }
})

 
// post 传值
router.post("/student",async(ctx,next)=>{
  let data = ctx.request.body  //接收post传递过来的数据
  await studentModel.create(data)  //向数据库中添加信息
  ctx.body = {
    code:200,
    msg:"添加成功"
  }
})

 
// 获取student的数据
router.get('/student', async (ctx, next) => {
  let data = await studentModel.find() //所有数据
  ctx.body = {
    data
  }
})


exports = router;