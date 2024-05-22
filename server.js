const path = require("path");
const express = require("express");
const app = express();
const router = require("./router/router");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(8080, () => {
  console.log("server is running on port http://localhost:8080");
});
