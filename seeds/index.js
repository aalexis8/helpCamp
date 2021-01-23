// The seed file will be self contained
// It connect to db on it's on
const mongoose = require("mongoose");
const Campground = require("../models/campground");

mongoose.connect("mongodb://prox6venode01.leahbelle.lan:2717/helpCamp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Campground.deleteMany({});
  const c = new Campground({ title: "strawberry field" });
  await c.save();
};

seedDB();
