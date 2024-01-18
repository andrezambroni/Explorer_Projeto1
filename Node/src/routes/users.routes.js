const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  const { name, email, senha } = request.body;

  response.json({ name, email, senha });
});



// estou esportando esse arquivo pra quem quiser utilizar
module.exports = usersRoutes;