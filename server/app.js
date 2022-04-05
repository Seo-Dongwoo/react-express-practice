"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static("build"));
// build 폴더를 꺼내가서 서버에서 사용해도 된다고 명시해주는 것.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/build/index.html");
    // sendFile로 바꾸고 __dirname + 경로로 표시
    // build 폴더를 server 폴더로 옮긴다.
});
app.listen(3000, () => {
    console.log("server is running");
});
// Heroku에 자동으로 배포하기!
// client Build => Build폴더를 server에 옮긴다. => server 실행
