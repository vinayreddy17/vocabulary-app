const express = require('express');
const router = express.Router();
const Word = require('../Models/Word');
const WordController=require("../controllers/wordcontroller.js")
// GET: Retrieve a words
 router.get('/getword',WordController.getWord)




// async (req, res) => {
//   try {
//     const words = await Word.find();
//     res.json(words);
//   } catch (error) {
//     res.status(500).json({ error: 'Error retrieving words' });
//   }
// });

// // POST: Add a new word
// router.post('/words', async (req, res) => {
//   const { word, meaning, synonyms, examples } = req.body;
//   const newWord = new Word({ word, meaning, synonyms, examples });

//   try {
//     const savedWord = await newWord.save();
//     res.json(savedWord);
//   } catch (error) {
//     res.status(500).json({ error: 'Error adding word' });
//   }
// });

// Define more API endpoints for updating and deleting words as needed

module.exports = router;
