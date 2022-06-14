module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    nama: { type: Sequelize.STRING, primaryKey: true },
    email: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
  });
  return User;
};
