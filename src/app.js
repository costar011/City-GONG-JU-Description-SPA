import express from "express";

const app = express();
const PORT = 3000;

// server 시작점에 views 폴더를 찾음
app.set("view engine", "pug");

app.listen(PORT, () => {
  console.log(`✅  ${PORT}Server Start :: City GONG-JU Description SPA`);
});
