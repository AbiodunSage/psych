const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const cors = require("cors");

const User = require("./Models/users");

mongoose.set("strictQuery", true);
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

app.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.json({ user: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Inavlid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://noblebsage01:psych@cluster0.tebudv7.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(3005, () => {
      console.log("App listening on port " + 3005);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
