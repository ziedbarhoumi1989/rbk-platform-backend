const User = require("../../../models/user");

module.exports = {
  getUserById: (id) => {
    return User.find({ id });
  },
  getAllUsers: () => {
    return User.find();
  },
  addUser: (userDetails) => {
    const user = new User(userDetails);
    return user.save();
  }
};
