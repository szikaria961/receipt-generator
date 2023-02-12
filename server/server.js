const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
  res.json({ "orders": ["123", "456", "789"] })
});

app.listen(PORT, () => {
  console.log(`[ server.js ] Serving static site at http://localhost:${PORT}`);
});