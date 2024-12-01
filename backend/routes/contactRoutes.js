const express = require("express");
const router = express.Router();

// Example POST Route
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // log the data 
  console.log(`Contact Request from ${name}: ${message}`);

  res.status(200).json({ success: "Your query has been submitted!" });
});

module.exports = router;
