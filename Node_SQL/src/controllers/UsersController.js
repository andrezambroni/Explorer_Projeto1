const AppError = require("../utils/AppError");

const sqlite = require("../database/sqlite");
const sqliteConnection = require("../database/sqlite");
const { hash, compare } = require("bcryptjs");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUsersExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUsersExists) {
      throw new AppError("Esse email já esta em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("Usuário nao encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail ja está sendo usado.");
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError(
        "Informe a senha atual para mudar o cadastro de senha."
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("Senha atual incorreta");
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET name = ?, email = ?, password = ?, updated_at = ?, WHERE id = ?`,
      [user.name, user.email, newDate(), id]
    );

    return response.json();
  }
}

module.exports = UsersController;
