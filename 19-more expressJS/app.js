// fs, path 가져오기
const fs = require("fs");
const path = require("path");

// third party express, uuid 가져오기
const express = require("express");
const uuid = require("uuid");

// user-define 가져옥;
const resData = require("./util/restaurant-data");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // "public"폴더 안에 정적 CSS, JS 파일 등을 사용한다
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "index.html");
  // res.sendFile(htmlFilePath);

  res.render("index");
});

app.get("/restaurants", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath);

  const storedRestaurants = resData.getStoredRestaurants(); // util/restaurant-data.js

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:rid", function (req, res) {
  // /restaurant/r1        :rid --> req.params.rid          :id --> req.params.id
  const restaurantId = req.params.rid;
  const storedRestaurants = resData.getStoredRestaurants(); // util/restaurant-data.js

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.status(404).render("404"); //잘못된 id 경우: 404 page render
});

app.get("/recommend", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath);

  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants(); // util/restaurant-data.js

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants); // util/restaurant-data.js

  res.redirect("/confirm");
}); // recommend페이지에서 submit시 데이터 저장

app.get("/confirm", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath);

  res.render("confirm");
});

app.get("/about", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath);

  res.render("about");
});

app.use(function (req, res) {
  res.status(404).render("404");
}); // 아예 주소자체가 틀린 경우: 404 page

app.use(function (error, req, res, next) {
  res.status(500).render("500");
}); // 서버 안의 content, data가 오류가 날 경우: 500 page

app.listen(3000);
