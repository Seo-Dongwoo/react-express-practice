import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("build"));
// build 폴더를 꺼내가서 서버에서 사용해도 된다고 명시해주는 것.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
  // sendFile로 바꾸고 __dirname + 경로로 표시
  // build 폴더를 server 폴더로 옮긴다.
});

app.listen(PORT, () => {
  console.log("server is running");
});

// 대략적인 순서
// client Build => Build폴더를 server에 옮긴다. => server 실행

// 구체적인 순서
// 1. client 폴더에서 해야할 것.
// client 폴더로 이동
// npm ci
// npm run build
// client에 있는 build 폴더를 server로 옮긴다.

// 2. server 폴더에서 해야할 것.
// npm ci
// tsc로 app.ts를 app.js로 변환
// node app.js 실행

// 위의 과정을 알아서 해주게끔 짜보자!
