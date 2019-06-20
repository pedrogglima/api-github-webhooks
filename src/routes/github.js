const express = require("express");
const router = express.Router();

router.post("/webhooks/payload", async (req, res) => {
  try {
    const event = await req.context.models.Event.create({
      type: "Issue",
      data: req.body
    });
    return res.send(event);
  } catch (err) {
    if (err.name == "ValidationError") {
      console.error("Error Validation\n", err);
      return res.status(422).send(err);
    } else {
      console.error(err);
      return res.status(500).send(err);
    }
  }
});

router.get("/webhooks/:id/event", async (req, res) => {
  try {
    const event = await req.context.models.Event.findById(req.params["id"]);
    return res.send(event);
  } catch (err) {
    return res.send(err);
  }
});

router.get("/webhooks/events", async (req, res) => {
  try {
    const event = await req.context.models.Event.find().select("id");
    return res.send(event);
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
