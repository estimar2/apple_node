const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { application } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("express open 3000");
});

app.get("/pet", (req, res) => {
  res.send("펫 용품 쇼핑할 수 있는 페이지");
});

app.get("/beauty", (req, res) => {
  res.send("뷰티 용품 쇼핑할 수 있는 페이지");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", (req, res) => {
  console.log(req.body, "확인");
  res.send("/add 완료");
});

// REST 원칙
// 1. Uniform interface
//     - 하나의 자료는 하나의 URL로
//     - URL 하나를 알면 둘을 알 수 있어야함
//     - 요청과 응답은 정보가 충분히 들어있어야함
// 2. client-server 역할 구분
//     - 브라우저는 요청만 할 뿐
//     - 서버는 응답만 할 뿐
// 3. Stateless
//     - 요청1과 요청2는 의존성이 없어야함
// 4. Cacheable
//     - 서버에서 보내주는 정보들은 캐싱이 가능해야함
//     - 캐싱을 위한 버전 같은 것도 관리 잘해야함(실은 브라우저가 알아서 해줌)
// 5. Layered System
// 6. Code on Demand

// 좋은 REST api
// - 이름짓기 원칙
//     - URL을 명사로 작성 추천
//     - 하위문서를 나타낼 땐 "/" 사용
//     - 파일확장자(.html) 쓰지 말기
//     - 띄어쓰기는 대시(-) 이용
//     - 자료 하나당 하나의 URL
