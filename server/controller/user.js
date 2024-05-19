const User = require("../model/user");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const KEY = "THIS IS SECRET KEY !";

async function handleUserCreate(req, res) {}

async function handleUserLogin(req, res) {}

async function handleUserAuthCheck() {}

module.exports = {
 handleUserCreate,
 handleUserLogin,
 handleUserAuthCheck,
};
