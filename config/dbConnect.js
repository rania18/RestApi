const mongoose = require('mongoose');
require("dotenv").config({ path: "./config/.env" });
const DB = process.env.DB_URI;

const connectDB = () => {
    mongoose.connect(
        DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
        (err) => {
            if (err) throw err;
            console.log("Db connected");
        }
    );
};
module.exports = connectDB;