const express = require('express');
const app = express();
const cors = require("cors");
const connectdatabase = require('./config/database');

connectdatabase;

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("\x1b[35m%s\x1b[0m", `Server running on port ${port}`);
});