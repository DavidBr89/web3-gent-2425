const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

const { param, body } = require("express-validator");

/* GET users listing. "/users/" */
router.get("/", UsersController.getAllUsers);

router.get(
  "/:id",
  [param("id").isInt().withMessage("Id moet een geheel getal zijn.")],
  UsersController.getUserById
);

router.post(
  "/",
  [
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("email").isEmail(),
    body("password").isStrongPassword({
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),
  ],
  UsersController.createUser
);

router.put("/:id", UsersController.updateUser);

router.delete("/:id", UsersController.deleteUser);

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Databank call hebben -> user bestaat / geldig wachtwoord / ...
  const isLoggedIn = true;

  if (isLoggedIn) {
    return res.send({ id: 11, email });
  }

  // 200 - OK
  // 201 - Created
  // 204 - No Content
  // 400 - Bad Request
  // 401 - Unauthorized
  // 403 - Forbidden
  // 404 - Not Found
  // 500 - Internal Server Error
  res.sendStatus(401);
});

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
