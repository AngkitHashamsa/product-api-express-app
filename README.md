2
​

[![Build Status](https://travis-ci.org/anishkny/node-express-realworld-example-app.svg?branch=master)](https://travis-ci.org/anishkny/node-express-realworld-example-app)
4
​
5

> ### Example Node (Express + Mongoose) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API spec.
>
> 6
> ​
> 7
> <a href="https://thinkster.io/tutorials/node-json-api" target="_blank"><img width="454" src="https://raw.githubusercontent.com/gothinkster/realworld/master/media/learn-btn-hr.png" /></a>
> 8
> ​
> 9
> This repo is functionality complete — PRs and issues welcome!
> 10
> ​
> 11

# Getting started

12
​
13
To get the Node server running locally:
14
​
15

- Clone this repo
  16
- `npm install` to install all required dependencies
  17
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
  18
- `npm run dev` to start the local server
  19
  ​
  20
  Alternately, to quickly try out this repo in the cloud, you can [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/realworld)
  21
  ​
  22

# Code Overview

23
​
24

## Dependencies

25
​
26

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
  27
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
  28
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
  29
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
  30
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
  31
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication
  32
- [slug](https://github.com/dodo/node-slug) - For encoding titles into a URL-friendly format
  33
  ​
  34

## Application Structure

35
​
36

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
  37
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
  38
- `routes/` - This folder contains the route definitions for our API.
  39
- `models/` - This folder contains the schema definitions for our Mongoose models.
  40
  ​
  41

## Error Handling

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
