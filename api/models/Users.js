const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  setSuperadmin() {
    Users.update({ rol: "superadmin" }, { where: { id: 1 } });
  }
}

Users.init(
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
  }
);

Users.afterCreate(async (user) => {
  const id = user.id;
  id === 1 ? user.setSuperadmin() : (user.rol = "user");
});

Users.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(16);
  const hash = await user.hash(user.password, salt);
  user.salt = salt;
  user.password = hash;
});

// the defined model is the class itself
module.exports = Users;
