const express = require("express");
const cors = require("cors");

app = express();
// Enable CORS for all origins
app.use(cors());

const helloRouter = require("./routers/helloRouter");
const studentRouter = require("./routers/studentRouter");

app.use(express.json());
app.use('/',helloRouter);
app.use('/',studentRouter);

module.exports = app;