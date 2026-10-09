// my dns was failing so using google dns
require("node:dns").setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var Post = require("./models/Post");

var app = express();

// so i can read req.body
app.use(express.json());

// connecting to atlas
mongoose.connect(process.env.MONGO_URI)
  .then(function () {
    console.log("mongodb connected");
  })
  .catch(function (err) {
    console.log("connection error", err);
  });

// GET all posts, asks the database
app.get("/posts", function (req, res) {
  Post.find()
    .then(function (posts) {
      res.json(posts);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Something went wrong", error: err.message });
    });
});

// GET one post by id (still the placeholder for now)
app.get("/posts/:id", function (req, res) {
  res.json({ message: "Route active" });
});

// POST a new post, saves it in the database
app.post("/posts", function (req, res) {
  Post.create({
    title: req.body.title,
    content: req.body.content
  })
    .then(function (newPost) {
      res.status(201).json(newPost);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Could not create post", error: err.message });
    });
});

// DELETE a post by its mongo id (long string now, not a number)
app.delete("/posts/:id", function (req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(function (deletedPost) {
      // if nothing found with that id
      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted", post: deletedPost });
    })
    .catch(function (err) {
      res.status(500).json({ message: "Could not delete post", error: err.message });
    });
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});