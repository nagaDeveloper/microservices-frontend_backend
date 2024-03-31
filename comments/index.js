const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let commetsByPostId = {};

app.get("/posts/:id/comments", (req, res, next) => {
  res.send(commetsByPostId[req.params.id] || []);
});
app.post("/posts/:id/comments", (req, res, next) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commetsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });

  commetsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(3002, () => {
  console.log("this is listening to port 3002");
});
