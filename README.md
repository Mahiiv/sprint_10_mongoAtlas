# Sprint 10 - MongoDB Atlas + Mongoose

A blog posts API using Express, Mongoose and MongoDB Atlas. Posts are saved in the cloud now, not in an array.

https://sprint-10-mongoatlas.onrender.com/posts

## Routes
- GET /posts - gets all posts
- POST /posts - makes a new post (send title and content as JSON)
- DELETE /posts/:id - deletes a post by its mongo id

## How to run
1. npm install
2. make a .env file with MONGO_URI=your atlas connection string
3. node index.js

## Tech
Node, Express, Mongoose, MongoDB Atlas, dotenv
