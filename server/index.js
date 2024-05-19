const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mealRouter = require("./routes/meal");
const userRouter = require("./routes/user");
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

app.use("/api/users", userRouter);
app.use("/api/meals", mealRouter);

app.listen(PORT, () => console.log("listening on PORT : ", PORT));
