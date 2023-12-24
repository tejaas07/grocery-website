const addGrocery = require("./routes/add-grocery");
const getGrocery = require("./routes/get-grocery");
const cors = require("cors");
const Express = require("express");

const app = Express();

app.use(cors({ credentials: true, origin: true }));

// Middleware to parse JSON
app.use(Express.json());

// Middleware to parse URL-encoded data
app.use(Express.urlencoded({ extended: true }));

app.use(addGrocery);
app.use(getGrocery);

module.exports = app;
