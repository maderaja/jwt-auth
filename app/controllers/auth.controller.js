const db = require("../models");
const authConf = require("../config/auth.config.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = db.user;

exports.register = (req, res) => {
  User.create({
    nama: req.body.nama,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((userData) => {
      res.send({
        status: "success",
        message: "User Registration Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error", message: "Registration Failed" });
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).send({ message: "User not found" });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).send({ message: "Invalid password" });
      }

      let token = jwt.sign({ username: user.username }, authConf.secret, {
        expiresIn: 86400,
      });
      res.send({
        status: "success",
        message: "User Login Successfully",
        accessToken: token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error", message: "Registration Failed" });
    });
};
