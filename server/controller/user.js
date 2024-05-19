const User = require("../model/user");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const KEY = "THIS IS SECRET KEY !";

async function handleUserCreate(req, res) {
 try {
  const { username, password, confirmPassword } = req.body.data;

  // TODO : check if the username is available or not

  if (!username || !password || !confirmPassword)
   return res.status(400).json({ error: "missing required field" });

  bcrypt.genSalt(10, (err_1, salt) => {
   bcrypt.hash(password, salt, async (err_2, hash) => {
    if (err_2) return res.status(500).json({ error: "Something went wrong" });

    await User.create({ username, password: hash });
   });
  });

  res.status(200).json({ success: "ok" });
 } catch (error) {
  res.json({ error });
 }
}

async function handleUserLogin(req, res) {
 try {
  const { username, password } = req.body.data;

  if (!username || !password) return res.status(401).end("unauthorized");

  const data = await User.findOne({ username });
  if (data) {
   bcrypt.compare(password, data.password).then((result) => {
    if (!result) return res.status(401).end("unauthorized");

    // TODO : add jwt auth
    const token = jwt.sign({ username }, KEY);
    console.log(token);
    res.cookie("uid", token, {});

    return res.status(200).json({ success: "ok" });
   });
  } else {
   res.status(404).end("user not available");
  }
 } catch (error) {
  res.status(400).json({ error });
 }
}

async function handleUserAuthCheck() {
 try {
  return res.status(200).send("user is logged");
 } catch (error) {}
}

module.exports = {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
};
