const db = require("../models");
const authConf = require("../config/auth.config.js");
const jwt = require("jsonwebtoken");
const User = db.user;

verifyToken = (req, res, next) => {
  let token;
  try {
    token = req.headers["authorization"].split(" ")[1];
  } catch (e) {
    return res.status(403).send({ message: "No token provided" });
  }
  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }
  jwt.verify(token, authConf.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.username = decoded.username;
  });
  next();
};

const authJWT = {
  verifyToken: verifyToken,
};

module.exports = authJWT;
