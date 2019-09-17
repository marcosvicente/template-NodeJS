import express from "express"
import app from "./app.js"
import HomeController from "./app/controller/HomeController.js"

const routes = express.Router();

routes.get("/api", HomeController.index)

module.exports = routes;
