const request = require("supertest");
const expect = require("chai").expect;
const express = require("express");

const app = express();

app.get("/github/:id/event", function(req, res) {
  res.status(200).json({ data: "foobar" });
});

describe("Endpoint request events", function() {
  describe("GET /:id/event", function() {
    it("responds with json", async () => {
      const res = await request(app).get("/github/1/event");
      expect(res.status).to.equal(200);
      expect(res.header["content-type"]).to.equal(
        "application/json; charset=utf-8"
      );
    });
  });
});

app.post("/github/payload", function(req, res) {
  res.status(200).json(res.body);
});

describe("Endpoint payload event", function() {
  describe("POST /github/payload", function() {
    it("responds with json", async () => {
      const res = await request(app)
        .post("/github/payload")
        .send({ data: " foobar" })
        .set("Accept", "application/json");

      expect(res.status).to.equal(200);
    });
  });
});
