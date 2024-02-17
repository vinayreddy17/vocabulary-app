
import { MongoClient } from 'mongodb';
import 'dotenv/config'

const url =process.env.MONGO_URL
console.log(process.env.MONGO_URL)
const dbName ='vocabulary';

async function dbConnection() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

const getWords = async (req, res) => {
  try {
    const db = await dbConnection();
    const words = await db.collection('words').find().toArray();
    res.json(words);
  } catch (error) {
    console.error("Error retrieving words:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getWords };

