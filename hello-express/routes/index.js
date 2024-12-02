const express = require("express");
const router = express.Router();

/* GET home page. "//"*/
router.get("/", function (request, response) {
  response.send("Hello Web3!");
});

module.exports = router;
