const express = require("express");
const app = express();
const { fizbuz } = require("./play");

app.get('/', () => {
    fizbuz(100);
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});