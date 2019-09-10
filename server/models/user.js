export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your login'
      },
      unique: {
        args: true,
        msg: 'Login is already taken'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email'
      },
      unique: {
        args: true,
        msg: 'Login is already taken'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your password'
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
