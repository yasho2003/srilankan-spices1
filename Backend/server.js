import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// ... (imports remain)

// INITIALIZE TABLES
const initTables = () => {
  const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      address TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
    ;


  db.query(usersTable, (err) => {
    if (err) console.log("Error creating users table ❌", err);
    else console.log("Users table confirmed ✅");
  });
};

initTables();

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// REGISTER
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
 
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: "Email already exists" });
      }
      return res.status(500).json(err);
    }
    const newUser = { id: result.insertId, name, email };
    res.json(newUser);
  });
});

// LOGIN
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(401).json({ message: "Invalid email or password" });

    const { password: _, ...user } = data[0];
    res.json(user);
  });
});

// UPDATE USER
app.put("/api/users/update", (req, res) => {
  const { id, name, email, address } = req.body;
  const sql = "UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?";

  db.query(sql, [name, email, address, id], (err, result) => {
    if (err) return res.status(500).json(err);
    // Fetch updated user to return
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
      if (err) return res.status(500).json(err);
      const { password: _, ...user } = data[0];
      res.json(user);
    });
  });
});


// ADD TO CART
app.post("/api/cart/add", (req, res) => {
  const { id, name, price, quantity = 1 } = req.body;

  const sql =
    "INSERT INTO cart (product_id, name, price, quantity) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)";

  db.query(sql, [id, name, price, quantity], (err) => {
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

// CLEAR CART (For logout or order completion)
app.delete("/api/cart/clear", (req, res) => {
  db.query("DELETE FROM cart", (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Cart cleared" });
  });
});

app.listen(5001, () => {
  console.log("Server running on port 5001 🚀");
});
