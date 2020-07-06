const express = require("express");
const loaders = require("./loaders");
const { port } = require("./utils/config");

const app = express();
loaders(app);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});
