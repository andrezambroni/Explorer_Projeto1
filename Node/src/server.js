const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = resquest.params;

  response.send(`
        Id da mensagem: ${id}. 
        Para usuário: ${user}.
   `);
});

app.get("/users", (resquest, response) => {
  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}`);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
