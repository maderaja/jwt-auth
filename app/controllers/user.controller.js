const db = require("../models");

const User = db.user;

exports.get = (req, res) => {
  User.findOne({
    where: { username: req.username },
  }).then((user) => {
    res.send({ user: user });
  });
};
