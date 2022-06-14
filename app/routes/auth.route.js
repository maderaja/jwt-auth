const controller = require("../controllers/auth.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Controll-Allow-Headers",
      "authorization, Oringin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/register", controller.register);
  app.post("/api/auth/login", controller.login);
};
