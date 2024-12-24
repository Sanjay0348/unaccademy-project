const express = require("express");
const mysql = require("mysql2");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");


const app = express();


doenv.config({
  path: "./.env",
});
const db = mysql.createConnection({
  host: 'localhost',     
  port: 3306,            // default port for mysql is 3306
  database: 'world',      // database from which we want to connect our node application
  user: 'root',          // username of the mysql connection
  password: 'root'       // password of the mysql connection
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//console.log(__dirname);
const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(8000, () => {
  console.log("Server Started @ Port 5000");
});