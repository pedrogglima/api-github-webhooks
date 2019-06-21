require("dotenv/config");
const express = require("express");

const routes = require("./routes");
const { connectDb, models } = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models
    // For handling manual authentication
    //auth: await models.User.findByLogin('user-name')
  };
  next();
});

app.use("/github", routes.github);

app.get("*", function(req, res) {
  res.status(404).send("Page not found.");
});

connectDb()
  .then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    );
  })
  .catch(function(err) {
    console.log(err);
  });
