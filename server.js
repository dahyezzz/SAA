
const express = require("express");
const expressLayouts = require("express-ejs-layouts");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressLayouts);
app.set("view engine","ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use("/", require("./routes/main.js"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = express;