const express = require("express");
const path = require("path");
const fs = require("fs");
const validator = require("./helpers/validator");
const courses = require("./courses.json");

const app = express();
const PORT = 3000;

// Parse application/json
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/courses", (req, res) => {
  res.status(200).send(courses);
});

app.get("/courses/:id", (req, res) => {
  const ID = req.params.id;
  const courseData = courses;
  const filteredCourse = courseData.filter((val) => val.courseId == ID);
  res.status(200).send(filteredCourse);
});

app.get("/courses/:id/avg-rating", (req, res) => {
  const ID = req.params.id;
  const courseData = courses;
  const averageR = courseData.filter((val) => val.courseId == ID)[0]
    .averageRating;
  res.status(200).json(averageR);
});

app.post("/courses", (req, res) => {
  const userProvidedDetails = req.body;
  const writePath = path.join(__dirname, "courses.json");

  if (validator.validateCourseInfo(userProvidedDetails)) {
    courses.push(userProvidedDetails);
    const jsonData = JSON.stringify(courses);

    fs.writeFile(writePath, jsonData, (err) => {
      if (err) res.status(500).send("Something went wrong...");
      else
        res
          .status(201)
          .send(validator.validateCourseInfo(userProvidedDetails).message);
    });
  } else
    res.status(400).json(validator.validateCourseInfo(userProvidedDetails));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("something went wrong while starting the server");
  } else {
    console.log("server is running on port 3000");
  }
});
