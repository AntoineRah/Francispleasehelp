import express from 'express';
import { Router } from 'express';
import User from './user';
import mongoose from 'mongoose';
const cors = require('cors');
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
// Use the cors middleware to allow requests from all origins
app.use(cors());


router.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
