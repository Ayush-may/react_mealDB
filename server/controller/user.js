const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleUserCreate(req, res) {
 try {
  const { username, password } = req.body.data;

  // check if it is already present or not
  const data = await User.findOne({ username });
  if (data) return res.status(409).send("user is already present");

  // hash the password
  const genSalt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, genSalt);

  // generate the jwt token and logged in
  const token = jwt.sign({ username }, process.env.JSONKEY);
  res.cookie("uid", token);

  // save the user and return from here
  (await User.create({ username, password: hashPassword })).save();
  return res.status(200).send("The user is created !");
 } catch (error) {
  // in-case something happened
  res.status(400).send("something went wrong");
 }
}

async function handleUserLogin(req, res) {}

async function handleUserAuthCheck() {}

module.exports = {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
};
