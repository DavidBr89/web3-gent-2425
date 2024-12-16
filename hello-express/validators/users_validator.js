const { param, body } = require("express-validator");

const UsersValidator = {
  idValidator: [
    param("id").isInt().withMessage("Id moet een geheel getal zijn."),
  ],
  createValidator: [
    body("firstName")
      .isString()
      .withMessage("Voornaam is verplicht")
      .notEmpty()
      .withMessage("Voornaam mag niet leeg zijn")
      .trim()
      .escape(),
    body("lastName")
      .isString()
      .withMessage("Achternaam is verplicht")
      .notEmpty()
      .withMessage("Achternaam mag niet leeg zijn")
      .trim()
      .escape(),
    body("email").isEmail().withMessage("Geen geldig emailadres"),
    body("password")
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Wachtwoord moet minstens uit 8 tekens bestaan, met minstens 1 speciaal karakter, minstens 1 hoofdletter en minstens 1 nummer"
      )
      .escape(),
    body("isVerified").isBoolean().withMessage("Moet true/false zijn"),
  ],
  updateValidator: [
    body("firstName")
      .optional()
      .isString()
      .withMessage("Voornaam is verplicht")
      .notEmpty()
      .withMessage("Voornaam mag niet leeg zijn")
      .trim()
      .escape(),
    body("lastName")
      .optional()
      .isString()
      .withMessage("Achternaam is verplicht")
      .notEmpty()
      .withMessage("Achternaam mag niet leeg zijn")
      .trim()
      .escape(),
    body("email").optional().isEmail().withMessage("Geen geldig emailadres"),
    body("password")
      .optional()
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Wachtwoord moet minstens uit 8 tekens bestaan, met minstens 1 speciaal karakter, minstens 1 hoofdletter en minstens 1 nummer"
      )
      .escape(),
    body("isVerified")
      .optional()
      .isBoolean()
      .withMessage("Moet true/false zijn"),
  ],
};

module.exports = UsersValidator;
