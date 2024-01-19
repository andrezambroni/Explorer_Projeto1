class UsersController {

  create(request, response) {
    const { name, email, password } = request.body;

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;

// index - GET para listar varios registros

// show - GET para exibir um registro específico

// create - POST para criar um registro

// update - PUT para atualizar um registro

// delete - DELETE para removar um registro
