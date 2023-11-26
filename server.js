import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 3000;
import cors from 'cors';
// import bodyParser from 'body-parser';

import { getWords } from "./controllers/wordcontroller.js";


const router =express.Router();
app.use(json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/',(req,res)=>{
  res.json({message:"hello "})
})
router.get('/getwords',getWords)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
