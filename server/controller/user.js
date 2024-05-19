const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const KEY = "THIS IS SECRET KEY !";

async function handleUserCreate(req, res) {
 try {
  console.log("entered");
  const { username, password } = req.body.data;

  //check if it is already present or not
  const data = await User.find({ username });
  if (!data) {
   return res.status(409).send("user is already present");
  }

  //   save the user
  (await User.create({ username, password })).save();

  return res.status(200).send("The user is created !");
 } catch (error) {}
}

async function handleUserLogin(req, res) {}

async function handleUserAuthCheck() {}

module.exports = {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
};
