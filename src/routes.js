import express from "express"

const routes = express.Router();

routes.get("/api", (req, res) => {
    res.json({status: "Index"})
})

module.exports = routes;
