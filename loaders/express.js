const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("../routes");

module.exports = async (app) => {
  app.use(
    cors({
      exposedHeaders: ["Content-Type", "x-token", "x-refresh-token"]
    })
  );
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api/user", routes.userRoute);
};
