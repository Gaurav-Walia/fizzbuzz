const express = require("express");
const app = express();
const path = require("path");
const { fizbuz } = require("./play");

const publicPath = path.join(__dirname, "views/public");
app.use(express.static(publicPath));

const viewPath = path.join(__dirname, "views");
app.set("view engine", "html");
app.set("views", viewPath);

app.get("/", (req, res) => {
    res.render("/views/home", { title: "HOME PAGE" });
});

app.get("/play", (req, res) => {
    fizbuz(100);
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});