const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const products = require("./products");
app.use(express.json());
app.use(bodyParser.json());
// app.use(express.urlencoded())
app.use(cors());




// app.get("/contact", (req, res) => {
//   res.send("jjjjjjjjjjj");
// });


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/form", (req, res) => {
  res.send("form");
});
app.post("/form/signin", (req, res) => {
  console.log(req.body);
  res.json("form submitted");
});
app.post("/form/search", (req, res) => {
  console.log(req.body);
  res.json("Done");
});
app.post("/form/contact", (req, res) => {
  console.log(req.body);
  res.json("Thank you dear kjsjm, Your messages has been received successfully. Futher details will sent to you by your email");
});




// Serve static files from the React app's build directory
// app.use(express.static(path.join(__dirname, "build")));

// // Route to serve the main React HTML file
// app.get("/form", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });






// app.get("/form", (req, res) => {
//   res.sendFile(__dirname + "/frontend/src/components/home/Header/HeaderBottom.js")
// });



// app.post("/formpost", (req, res) => {
//   console.log(req.body);
// });
const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));
