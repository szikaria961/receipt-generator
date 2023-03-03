const { request } = require('express');
const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const SHOPIFY_APP_API_KEY = process.env.SHOPIFY_APP_API_KEY;
const SHOPIFY_APP_TOKEN = process.env.SHOPIFY_APP_TOKEN;
const STORE_NAME = "receipt-generator.myshopify.com";

let options = {
  method: 'GET',
  url: `https://${SHOPIFY_APP_API_KEY}:${SHOPIFY_APP_TOKEN}@${STORE_NAME}/admin/api/2023-01/products.json`,
  headers: {
    'Content-Type': 'application/json'
  }
};

async function getShopifyProducts() {
  try {
    const { data } = await axios.get(`https://${SHOPIFY_APP_API_KEY}:${SHOPIFY_APP_TOKEN}@${STORE_NAME}/admin/api/2023-01/products.json`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.get("/products", async (req, res) => {
  res.json(await getShopifyProducts());
});

app.get("/api", (req, res) => {
  res.json({ "orders": ["123", "456", "789"] })
});

app.listen(PORT, () => {
  console.log(`[ server.js ] Serving static site at http://localhost:${PORT}`);
});