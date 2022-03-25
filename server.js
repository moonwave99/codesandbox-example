const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const data = [
    { id: 1, name: "yo" },
    { id: 2, name: "ya" },
    { id: 3, name: "ye" },
];

app.get("/api/data", (request, response) => response.json(data));

app.listen(8080);
