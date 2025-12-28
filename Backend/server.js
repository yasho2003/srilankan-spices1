import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ADD TO CART
app.post("/api/cart/add", (req, res) => {
  const { id, name, price } = req.body;

  const sql =
    "INSERT INTO cart (product_id, name, price, quantity) VALUES (?, ?, ?, 1)";

  db.query(sql, [id, name, price], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "Item added to cart ✅" });
  });
});

// GET CART ITEMS
app.get("/api/cart", (req, res) => {
  db.query("SELECT * FROM cart", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// REMOVE ITEM
app.delete("/api/cart/:id", (req, res) => {
  db.query("DELETE FROM cart WHERE product_id = ?", [req.params.id]);
  res.json("Item removed ❌");
});

// UPDATE CART QUANTITY
app.put("/api/cart/update", (req, res) => {
  const { id, quantity } = req.body;
  const sql = "UPDATE cart SET quantity = ? WHERE product_id = ?";
  db.query(sql, [quantity, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "Cart updated ✅" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
