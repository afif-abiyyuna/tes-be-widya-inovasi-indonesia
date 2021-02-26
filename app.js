const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const routes = require("./routes/index");
const mongooseConnect = require("./configs/mongoose.config");


var corsOptions = {origin: "http://localhost:3001"};
app.use(cors(corsOptions));
mongooseConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT, ()=>{
    console.log(`Apps run on http//:localhost:${PORT}/`);
});