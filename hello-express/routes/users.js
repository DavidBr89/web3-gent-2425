const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

const UsersValidator = require("../validators/users_validator");

/* GET users listing. "/users/" */
router.get("/", UsersController.getAllUsers);

router.get("/:id", UsersValidator.idValidator, UsersController.getUserById);

router.post("/", UsersValidator.createValidator, UsersController.createUser);

router.patch(
  "/:id",
  [...UsersValidator.idValidator, UsersValidator.updateValidator],
  UsersController.updateUser
);

router.delete("/:id", UsersValidator.idValidator, UsersController.deleteUser);

router.post("/login", UsersController.login);

module.exports = router;

// const obj = {
//   first: function () {
//     return this;
//   },
//   second: function () {
//     return undefined;
//   },
// };

// obj.first().second();
