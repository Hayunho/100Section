const path = require("path");

// third party express 가져오기
const express = require("express");

// default.js에서 라우트 가져오기 전 js 가져오기
const defaultRoutes = require("./routes/default");
// restaurant.js엑서 라우트 가져오기전 js 가져오기
const restaurantRoutes = require("./routes/restaurant");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // "public"폴더 안에 정적 CSS, JS 파일 등을 사용한다
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);
// 만일 app.use("/restaurant", restaurantRoutes)를 하면
// localhost:3000/restaurant/(restaurant, confirm, recommend)으로 나오게 된다

app.use(function (req, res) {
  res.status(404).render("404");
}); // 아예 주소자체가 틀린 경우: 404 page

app.use(function (error, req, res, next) {
  res.status(500).render("500");
}); // 서버 안의 content, data가 오류가 날 경우: 500 page

app.listen(3000);
