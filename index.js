const express = require("express");
const app = express();
const path = require("path");
var hbs = require("hbs");
let bodyParser = require('body-parser')
const { fizbuz } = require("./play");

const publicPath = path.join(__dirname, "views/public");
app.use(express.static(publicPath));

const viewPath = path.join(__dirname, "views");
app.set("views", viewPath);
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("home", { result: null });
});

app.post("/play", (req, res) => {
    let input = parseInt(req.body["play-input"]);
    let result = fizbuz(req, res, input);
    res.render("home", { result: result });
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});