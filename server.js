const express = require('express');
const { MongoClient } = require('mongodb');
const { default: mongoose } = require('mongoose');
const { CgPassword } = require('react-icons/cg');


const app = express();
const port = 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://Antoine:mkaybleh55@fyp.6ul0egv.mongodb.net/';

let dbConnection = null;

// Connect to MongoDB
MongoClient.connect(uri)
  .then((client) => {
    dbConnection = client.db();
    console.log('Connected to MongoDB');
    // Start the Express server
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  const getDb = () =>{
    if(dbConnection){
      return dbConnection;
    }
    throw "no database found!";
  }
module.exports = MongoClient;
module.exports = getDb;