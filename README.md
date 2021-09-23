# Getting started

To get the Node server running locally:

- Clone this repo

- `npm install` to install all required dependencies
- `nodemon app.js` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests

- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript

- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors) -
  A simple ES6 async/await support hack for ExpressJS

- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env -[nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

- `\db` - This folder contains function connecting mongoDB with mongoose

- `\routes` - This folder contains the route definitions for our API.
- `\controller` - This folder contains all the function
  needed in the routes

- `\models` - This folder contains the schema definitions for our Mongoose models.
- `\middleware` - This folder contains the error handling functions

  ​

# API

### Items

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products`

```json
{
  "products": [
    {
      "rating": 4.5,
      "createAt": "2021-09-21T13:01:45.573Z",
      "featured": true,
      "_id": "6149d7c73da9401498e30907",
      "name": "high-back bench",
      "price": 39,
      "company": "ikea",
      "__v": 0
    },
    {
      "rating": 4.5,
      "createAt": "2021-09-21T13:01:45.573Z",
      "featured": false,
      "_id": "6149d7c73da9401498e30908",
      "name": "leather sofa",
      "price": 99,
      "company": "caressa",
      "__v": 0
    }
  ]
}
```

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products/:id`

```json
{
  "product": {
    "rating": 4,
    "createAt": "2021-09-21T13:01:45.573Z",
    "featured": false,
    "_id": "6149d7c73da9401498e308ff",
    "name": "accent chair",
    "price": 25,
    "company": "marcos",
    "__v": 0
  }
}
```

# Search

### search

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?name=...`

### sorted by date

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?tags=....`

| Parameter         |                                       Description                                       |    Type |
| :---------------- | :-------------------------------------------------------------------------------------: | ------: |
|                   |                                          name                                           |         |
| `tags=`           |                                         company                                         |  String |
|                   |                                          sort                                           |         |
|                   |                                        featured                                         | Boolean |
| `select=`         |                                  all the data in json                                   |  String |
|                   | filter on a specific numerical condition (<, <=, =, > or >=)Available numerical fields: |         |
| `numericFilters=` |                                          price                                          |  String |
| `page`            |                                       page number                                       | Integer |

# Example

all words matching with a

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?name=a`

show with company ikea

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?company=ikea`

show both name with a and company ikea

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?name=a&company=ikea`

show featured either true or false

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?featured=true`

show result with only name and price

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?select`

show price greater than 200 and rating greater or equal to 4

- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?numericFilter=price>200,rating>=4`
  show page 2
- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?page=2`
  set limit default limit is 10
- `GET` : `https://store-api-product.herokuapp.com/api/v1/products?limit=5`
