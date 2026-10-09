# Prompts Log - Sprint 10

I used Claude to help me understand the sprint and fix errors. I typed the code myself step by step and tested everything in Thunder Client.

## Prompt 1 - understanding the sprint
I pasted the Sprint 10 brief and asked for an explanation in plain language before any code.
What I learned: MongoDB Atlas is a cloud database, Mongoose connects Express to it, and a schema is a blueprint for a post.

## Prompt 2 - choosing phases
I said I wanted to do till Phase 2 and that I had MongoDB and mongosh installed on my laptop.
What I learned: the sprint needs Atlas (cloud), not local MongoDB, because Render cannot reach my laptop.

## Prompt 3 - Atlas setup
I asked for step by step help with the Atlas screen (add IP address, database user, connection string).
What I learned: I need to allow 0.0.0.0/0 in Network Access so Render can connect.

## Prompt 4 - .env and .gitignore
I asked how to hide my connection string.
What I learned: keep MONGO_URI in a .env file and add .env to .gitignore so it never goes to GitHub.

## Prompt 5 - PowerShell error
npm install gave an execution policy error on Windows.
Fix: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Prompt 6 - connection error
I got "querySrv ECONNREFUSED" when connecting to Atlas.
Fix: my DNS was failing, so I added dns.setServers with Google DNS (8.8.8.8) at the top of my server file.

## Prompt 7 - replacing the array
I pasted my old routes that used the blogPosts array and asked for the database version.
What I learned: Post.create(), Post.find() and Post.findByIdAndDelete() replace the array logic, and ids are now long mongo strings, not numbers.

## Prompt 8 - testing
I tested POST, GET and DELETE in Thunder Client and checked the data in the Atlas Data Explorer.
Mistake I made: I sent POST to /posts/1 earlier, it should be /posts.

## Prompt 9 - deployment
I asked for help deploying on Render.
What I learned: MONGO_URI must be added in Render's Environment Variables because the .env file is not uploaded.
