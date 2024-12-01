const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Pet Store Backend API");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
