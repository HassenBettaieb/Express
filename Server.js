const express = require("express");
const app = express();
const port = 5000;
function Hour(req, res, next) {
  const date = new Date();
  const hours = date.getHours();
  const days = date.getDate();
  if (hours < 9 || hours >= 17 || days === 0 || days === 6) {
    return res.send("we are closed");
  }
  next();
}

app.get("/", Hour, (req, res) => {
  res.send("hello");
});
app.get("/Home", Hour, (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});
app.get("/Ourservices", Hour, (req, res) => {
  res.sendFile(__dirname + "/public/Home/Ourservices.html");
});
app.get("/ContactUs", Hour, (req, res) => {
  res.sendFile(__dirname + "/public/Home/ContactUs.html");
});

app.listen(port, () => {
  console.log(`the server run on port ${port}`);
});
