require("dotenv/config");
const express = require("express");

const routes = require("./routes");
const { connectDb, models } = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/github", routes.github);

connectDb()
  .then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    );
  })
  .catch(function(err) {
    console.log(err);
  });
