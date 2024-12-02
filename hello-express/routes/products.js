// Lokale module - Node.js
const express = require("express");
const router = express.Router();

// CRUD - Create Read Update Destroy (Delete)

// "/products"
router.get("/", (req, res) => {
  const qs = req.query;
  console.log(qs);

  res.send("Producten pagina");
});

router.post("/", (req, res) => {
  res.sendStatus(201);
});

router.put("/:id", (req, res) => {
  // PUT -> Update van al uw data
  // PATCH -> Lokale update van de data -> dus niet alles overschrijven

  const { id } = req.params;
  const data = req.body;

  console.log(id);

  res.json(data);
});

router.all("/*name", (req, res) => {
  res.send("Fallback");
});

module.exports = router;
