

// import { MongoClient } from 'mongodb';
// // Connection URL
// const url = 'mongodb://localhost:27017';

// async function dbConnection() 
// {
//   const client = new MongoClient(url);
//   const dbName = 'vocabulary';
//   await client.connect();
//   console.log("connected");
//   return client;



// }

// const client = await dbConnection();




// const getWords =(req,res)=>{
//     const words=client.db(vocabulary).collection(words).find();
//     res.send(words);
//       // client.set(products);
//       // res.status(200).send(products)
//       // console.log("hello");
//       // res.json({ message: "Words retrieved successfully" });

//   }

//  export {getWords};





// wordcontroller.js

import { MongoClient } from 'mongodb';

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'vocabulary';

async function dbConnection() {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db(dbName);
}

const getWords = async (req, res) => {
  try {
    const db = await dbConnection();
    const words = await db.collection('words').find().toArray();
    res.json(words);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getWords };
