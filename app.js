const express = require("express");
const app = express();
const mongoose=require("mongoose");
//TEMPLATE ENGINE
app.set("view engine","ejs")
//Middlewares
app.use(express.static("public"))
//Routes
app.get("/", (req, res) => {
    res.status(200).render("index",{
        page_name:"index"
      })
});
// Connect DB
const connectWithRetry = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/freelancer_database');
    console.log("Connected to DB");
  } catch (err) {
    console.error("Database connection error:", err);
    console.log("Retrying connection in 5 seconds...");
    setTimeout(connectWithRetry, 5000); 
  }
};
connectWithRetry();
const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});