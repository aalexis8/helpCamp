const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.connect("mongodb://prox6venode01.leahbelle.lan:2717/helpCamp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// .then(() => {
//   console.log("MONGODB IS AVAILABLE!!");
// })
// .catch((err) => {
//   console.log("DIDN'T CONNECT TO MONGODB!!!");
//   console.log(err);
// });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "My Backyard",
    description: "camping on the cheap!",
  });
  await camp.save();
  // res.render("home");
  res.send(camp);
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
