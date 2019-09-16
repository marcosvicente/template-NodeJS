import routes from "express".Router()

routes.get("/api", (req, res) => {
  return res.status(200).send();
})

module.exports = routes;
