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



async function handleUserLogin(req, res) {
    try {
        // getting the values
        const { username, password } = req.body.data;

        // check if user is present or not in database
        const data = await User.findOne({ username });
        if (!data) return res.status(400).send("user is not available");

        // if user is available then match the hashpassword with current password
        const isHashTrue = await bcrypt.compare(password, data.password);
        if (!isHashTrue) return res.status(400).send("password is wrong");

        // add token to the browser
        const token = jwt.sign({ username }, process.env.JSONKEY);
        res.cookie("uid", token);

        // everything went good
        res.status(200).send("user is loged in");
    } catch (error) {
        // in-case something happened
        return res.status(400).send("Something went wrong");
    }
}

// Update the cart
async function addToCart(req, res) {
    try {
        const { username, mealId, price, mealName, mealImage } = req.body;
        const user = await User.findOne({ username });

        user.cart.push({
            mealId, price, mealName, mealImage
        });
        await user.save();

        res.status(200).end("OK");
    } catch (error) { }
}



async function handleFectchCart(req, res) {
    try {
        const { username } = req.body;
        const user = await User.findOne({ username });
        res.status(200).json(user.cart);
    } catch (error) { }
}
async function handleUserAuthCheck() { }

module.exports = {
    handleUserCreate,
    handleUserLogin,
    handleUserAuthCheck,
    addToCart,
    handleFectchCart,
};
