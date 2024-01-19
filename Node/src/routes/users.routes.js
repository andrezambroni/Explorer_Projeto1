const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();


const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

// estou esportando esse arquivo pra quem quiser utilizar
module.exports = usersRoutes;
