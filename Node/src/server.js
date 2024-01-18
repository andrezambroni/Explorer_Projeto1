const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {

    const { id, user} = resquest.params;

  response.send(`
        Id da mendagem: ${id}. 
        Para usuário: ${user}.
   `);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is runnig on Port ${PORT}`));
