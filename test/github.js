const request = require("supertest");
const expect = require("chai").expect;
const express = require("express");

const app = express();

app.get("/github/webhooks/:id/event", function(req, res) {
  res.status(200).json({ data: "foobar" });
});

app.get("/github/webhooks/events", function(req, res) {
  res.status(200).json([
    {
      _id: "5d0b77b046587d07c01a29d1"
    },
    {
      _id: "5d0b794dcfad1f1fabc6f9b9"
    }
  ]);
});

describe("Endpoint request events", function() {
  describe("GET /github/webhooks/:id/event", function() {
    it("responds with json", async () => {
      const res = await request(app).get("/github/webhooks/1/event");
      expect(res.status).to.equal(200);
      expect(res.header["content-type"]).to.equal(
        "application/json; charset=utf-8"
      );
    });
  });

  describe("GET /github/webhooks/events", function() {
    it("responds with json", async () => {
      const res = await request(app).get("/github/webhooks/events");
      expect(res.status).to.equal(200);
      expect(res.header["content-type"]).to.equal(
        "application/json; charset=utf-8"
      );
    });
  });
});

app.post("/github/webhooks/payload", function(req, res) {
  res.status(200).json(res.body);
});

describe("Endpoint payload event", function() {
  describe("POST /github/webhooks/payload", function() {
    it("responds with json", async () => {
      const res = await request(app)
        .post("/github/webhooks/payload")
        .send({ data: " foobar" })
        .set("Accept", "application/json");

      expect(res.status).to.equal(200);
    });
  });
});
