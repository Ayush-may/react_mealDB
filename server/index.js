const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mealRoute = require("./routes/meal");
const PORT = process.env.PORT || 8001;

var corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.use("/api/meals", mealRoute);

app.listen(PORT, () => console.log("listening on PORT : ", PORT));
