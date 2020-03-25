const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  return res.jgon({
    evento: "Semana Omnistack 11.0",
    aluno: "Rafael Sergio"
  });
});

app.listen(3333);
