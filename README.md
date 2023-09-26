# course-rating-app

A simple app to Perform CRUD operations.

## How to use?

1. node install
2. nodemon "./src/index.js"

## What does it do?

GET - /courses → gets the list of the courses and their details

GET - /courses/1234 -> gets the details of the course named 1234

GET - /courses/1234/avg-ratings → gets the average ratings of all the students for the course 1234

POST - /courses -> Creates the launchpad with the provided details

POST - /courses/1234/ratings -> Adds the rating to the provided course 1234

PUT - /courses/1234 -> Modifies the information of the course with the provided details

## Learning

1. app.use(express.json());

   This is the middleware which is going to intercept the incoming request and parse it into json. When client sends some payload this converts the json payload into Javascript object.

   Here's a breakdown of how it works:

   - A client sends a POST or PUT request with a JSON payload in the request body.
   - The `express.json()` middleware intercepts the request before it reaches your route handlers.
   - It parses the JSON data and sets **`req.body`** to the resulting JavaScript object.
   - Your route handlers can then access and work with the parsed JSON data in **`req.body`**.
