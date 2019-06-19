const express = require("express");
const router = express.Router();

router.post("/webhooks/payload", (req, res) => {
  console.log("==================");
  console.log(`${req.body}`);
  console.log("==================");
  return res.send(req.body);
});

module.exports = router;
