const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is online" });
});

require("./app/routes/user.route.js")(app);
require("./app/routes/auth.route.js")(app);

db.sequelize.sync({ force: false });

const port = 3000;
app.listen(port, () => {
  console.log(`App iss running at port | http://localhost:${port}`);
});
