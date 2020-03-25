const express = require("express")

const routes = express.Router()

routes.post("/users", (req, res) => {
  const body = request.body;
  console.log(body)
  return res.jgon({
    evento: "Semana Omnistack 11.0",
    aluno: "Rafael Sergio"
  });
});

module.exports = routes