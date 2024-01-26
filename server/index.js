import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import { nextPowerTwo } from 'add';
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use('/user',userRoutes)
app.use('/questions',questionRoutes )
app.post('auth/signup',()=>{

})
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://pulimikeerthi155:keerthi123@stack-overflow-clone.x931wht.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
  .then(() => app.listen(PORT, () => {return (console.log(`Server running on port ${PORT}`)
  )}))
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  });
