const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM CAMP HELP!");
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
