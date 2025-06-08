import { Application,Router} from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
function page(body: string):string
{
  return `
  <html>
    <head>
      <style>
        body
        {
          background-color:orange;
          font-size:30px;
          text-align:center;
          color:black;
        }
        a
        {
          text-decoration:none;
        }
        a:hover
        {
          box-shadow: 5px 5px 5px black;
          color: white !important;
          font-weight: bold;
          border-radius:5px;
          background-color:saddlebrown;
        }
        a:visited
        {
          color: rgb(0,0,255);
        }
        a:active
        {
          color:white;
        }
        ol
        {
          display:inline-block;
          text-align:center;
          font-size:30px;
        }
      </style>
    </head>
    <body>
      ${body}
    </body>
  </html>`;
}
router
  .get("/", (ctx) =>
    {
    ctx.response.body = page
      (`
      <h1>我的自我介紹</h1>
      <ol>
        <li><a href="/name">姓名</a></li>
        <li><a href="/age">年齡</a></li>
        <li><a href="/gender">性別</a></li>
      </ol>
    `);
  })
  .get
  ("/name", (ctx) =>
  {
    ctx.response.body = page(`<h2>姓名：陳建瑋</h2><a href="/">回首頁</a>`);
  }
  )
  .get
  ("/age", (ctx) =>
    {
    ctx.response.body = page(`<h2>年齡：18</h2><a href="/">回首頁</a>`);
    }
  )
  .get
  ("/gender", (ctx) =>
    {
    ctx.response.body = page(`<h2>性別：男</h2><a href="/">回首頁</a>`);
    }
  );
app.use(router.routes());
app.use(router.allowedMethods());
app.use
  ((ctx) =>
    {
    ctx.response.status = 404;
    ctx.response.body = page(`<h2>404 - 找不到頁面</h2><a href="/">回首頁</a>`);
    }
  );
console.log("伺服器啟動於 http://127.0.0.1:8000");
await app.listen({port: 8000});
