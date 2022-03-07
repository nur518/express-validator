const { body } = require("express-validator");

module.exports = [
  body("firstName")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be greater than 2")
    .isLength({ max: 32 })
    .withMessage("First name must be less than 32"),

  body("lastName")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be greater than 2")
    .isLength({ max: 32 })
    .withMessage("Last name must be less than 32"),

  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ min: 2 })
    .withMessage("Email must be greater than 2 character.")
    .isEmail()
    .withMessage("Please enter a valid email."),

  body("secondaryEmail")
    .optional({ checkFalsy: true, nullable: true })
    .isLength({ min: 2 })
    .withMessage("Secondary email must be greater than 2 character.")
    .isEmail()
    .withMessage("Please enter a valid email."),

  body("phoneNumber")
    .optional({ checkFalsy: true, nullable: true })
    .isNumeric()
    .withMessage("Please enter a numeric value")
    .matches(/^(?:\+88|88)?(01[3-9]\d{8})$/)
    .withMessage("Valid Phone number is required. Must be in 11 digit"),

  body("orgUnit")
    .trim()
    .notEmpty()
    .withMessage("Organizational unit is required")
    .isInt({ min: 1, max: 50 })
    .withMessage("Min 1, Max 50"),
    
  body("password")
    .notEmpty()
    .withMessage("Password field is required")
    .isLength({ min: 8 })
    .withMessage("Password will be at least 8 characters in length")
    .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}$/)
    .withMessage('At least (one digit, one lowercase character, one uppercase character, one special character)')
];


