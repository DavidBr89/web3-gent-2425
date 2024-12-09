const express = require("express");
const router = express.Router();

/* GET users listing. "/users/" */
router.get("/", function (req, res, next) {
  const message = process.env.MSG;
  res.send(message);
});

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
