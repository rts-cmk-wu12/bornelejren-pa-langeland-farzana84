// server/index.js

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const express = require('express');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🗄️ Connected to MongoDB'))
.catch(err => console.error(err));

// Define a simple model
const MemberSchema = new mongoose.Schema({
  company: String,
  email: String,
  address: String,
  phone: String,
  amount: Number,
});
const Member = mongoose.model('Member', MemberSchema);

// CRUD endpoints
app.post('/api/members', async (req, res) => {
  const member = new Member(req.body);
  await member.save();
  res.status(201).json(member);
});

app.get('/api/members', async (req, res) => {
  const list = await Member.find();
  res.json(list);
});

// start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
