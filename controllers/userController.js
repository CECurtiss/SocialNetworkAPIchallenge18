const ObjectId = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // get all users
  getAllUsers(req, res) {
    User.find()
      .then(async (users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

//get single user by _id
  getSingleUser(req,res) {
    User.findOne({ _id: req.params.userId })
    .populate('thoughts')
    .populate('friends')
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err))
  },

// create a new user
  createUser(req, res) {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err))
  },

// update user info by _id
  updateUser(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { ...req.body },
        { new: true })
    .then((updatedData) => res.json(updatedData))
    .catch((err) => res.status(500).json(err))
  },

// delete user by _id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((deletedUser) => res.json(deletedUser))
    .catch((err) => res.status(500).json(err))
  }
};
// ^export closure