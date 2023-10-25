const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient } =require('mongodb')
const Router = require('./Routes/words') 


// mongodb connection
const MONGO_URL = "mongodb://localhost:27017"

async function dbConnection() {
  const client = new MongoClient(MONGO_URL)
  await client.connect()
}



app.use('/api/Words', Router);
// Middleware to parse JSON requests
app.use(express.json());

// Define routes and API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
