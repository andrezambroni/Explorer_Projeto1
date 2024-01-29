const AppError = require('../utils/AppError')

const sqlite = require('../database/sqlite');
const sqliteConnection = require('../database/sqlite');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)" , [email])

    if(checkUsersExists)
    {
      throw new AppError ("Esse email já esta em uso.")
    }
    return response.status(201).json();
  }
}

module.exports = UsersController
