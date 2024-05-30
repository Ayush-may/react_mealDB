require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mealRouter = require("./routes/meal");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");
const mongoConnect = require("./connection/mongoConnection");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");
const PORT = process.env.PORT || 8001;

var corsOptions = {
 origin: "http://localhost:5173",
 optionsSuccessStatus: 200,
 credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoConnect(`mongodb://127.0.0.1:27017/ingredient_ecommerce`).then(() =>
 console.log("mongoDb is connected")
);

// auth the user
app.get("/authuser", auth, (req, res) => {
 console.log('this is running')
 res.status(200).send("OK");
});

// user login and sign up
app.use("/api/users", userRouter);
// user data after logged-in
// app.use("/api/users/profile");
app.use("/api/meals", mealRouter);
app.use("/api/category", categoryRouter);

app.listen(PORT, () => console.log("listening on PORT : ", PORT));
