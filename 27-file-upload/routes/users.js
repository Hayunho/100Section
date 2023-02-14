const express = require("express");
const multer = require("multer");

const db = require("../data/database");

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images"); // cb(error, path)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); //cb (error, filename)
  },
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get("/", function (req, res) {
  res.render("profiles");
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  const uploadImageFile = req.file;
  const userData = req.body;

  console.log(uploadImageFile);
  console.log(userData);

  await db.getDb().collection("users").insertOne({
    name: userData.username,
    imagePath: uploadImageFile.path,
  });

  res.redirect("/");
});

module.exports = router;
