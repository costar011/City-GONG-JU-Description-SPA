import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// server 시작점에 views 폴더를 찾음
app.set("view engine", "pug");

// use안에 express.static 안에 path.join
// path.join먼저 실행
//static <- 누구나 사용할 수 있는 것
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(PORT, () => {
  console.log(`✅  ${PORT}Server Start :: City GONG-JU Description SPA`);
});
