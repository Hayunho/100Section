const express = require("express");
const uuid = require("uuid");
// user-define 가져오기
const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath);

  const storedRestaurants = resData.getStoredRestaurants(); // util/restaurant-data.js

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

router.get("/restaurants/:rid", function (req, res) {
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

router.get("/recommend", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath);

  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants(); // util/restaurant-data.js

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants); // util/restaurant-data.js

  res.redirect("/confirm");
}); // recommend페이지에서 submit시 데이터 저장

router.get("/confirm", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath);

  res.render("confirm");
});

module.exports = router;
