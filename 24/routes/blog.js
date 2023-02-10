const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const query = `
  SELECT posts.*, authors.name AS author_name FROM posts 
  INNER JOIN authors ON posts.author_id = authors.id`;
  const [posts] = await db.query(query);
  res.render("posts-list", { posts: posts });
});

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors"); // db mysql authors TABLE에서 첫번째 배열 가져오기
  res.render("create-post", {
    authors: authors,
  });
});

router.post("/posts", async function (req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];

  await db.query(
    "INSERT INTO posts (title, summary, body, author_id) VALUES (?)",
    [data]
  );
  // ? 안에 값 삽입, ? 개수 만큼 파라미터 지정 가능, ?가 하나면 변수 1개, ?가 2개면 변수 2개, 배열은 ? 하나만 있으면 됨
  //=> db.query("INSERT INTO posts (title, summary, body, author_id) VALUES (?, ?, ?, ?)", [data[0], data[1], data[2], data[3]])

  res.redirect("/posts");
});

module.exports = router;
