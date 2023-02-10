const express = require("express");

const db = require("../data/database");

const router = express.Router();

// main-page
router.get("/", function (req, res) {
  res.redirect("/posts");
});

// post-list page
router.get("/posts", async function (req, res) {
  const query = `
  SELECT posts.*, authors.name AS author_name FROM posts 
  INNER JOIN authors ON posts.author_id = authors.id`;
  const [posts] = await db.query(query);
  res.render("posts-list", { posts: posts });
});

// post-write page
router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors"); // db mysql authors TABLE에서 첫번째 배열 가져오기
  res.render("create-post", {
    authors: authors,
  });
});

// upload post
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

// post-detail page
router.get("/posts/:pid", async function (req, res) {
  const query = `
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id
    WHERE posts.id = ?
  `;

  const [posts] = await db.query(query, [req.params.pid]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  const postData = {
    ...posts[0],
    date: posts[0].date.toISOString(),
    humanReadableDate: posts[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  res.render("post-detail", { post: postData });
});

// edit post page
router.get("/posts/:pid/edit", async function (req, res) {
  const query = `
    SELECT * FROM posts WHERE posts.id = ?
  `;
  const [posts] = await db.query(query, [req.params.pid]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update-post", { post: posts[0] });
});

module.exports = router;
