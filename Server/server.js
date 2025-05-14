const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Support = require("./models/Support");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection - Add your Connection String
mongoose
  .connect("mongodb+srv://admin:admin@cluster0.zqzqy.mongodb.net/support_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Routes
app.post("/api/support", async (req, res) => {
  try {
    const supportData = new Support(req.body);
    const savedData = await supportData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/support", async (req, res) => {
  try {
    const supportData = await Support.find();
    res.status(200).json(supportData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// How can we use in React Application

// // POST request
// const createSupport = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/support', {
//         supportType: "Technical Support",
//         company: "Tech Solutions Inc",
//         email: "support@techsolutions.com",
//         address: "456 Tech Street, Silicon Valley",
//         phone: "555-0123",
//         amount: "5000"
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // GET request
//   const getSupportData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/support');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
