const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

// function myMiddleware(request, response, next) {
//   console.log("passou pelo middleware");

//   if (!request.body.isAdmin) {
//     return response.json({ message: "usuario nao autorizado" });
//   }

//   next();
// }

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

// estou esportando esse arquivo pra quem quiser utilizar
module.exports = usersRoutes;
