import express from 'express';
import mongoose from 'mongoose';
import userroute from './route/userroute.js';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const mongoURI = "mongodb+srv://pramodsupun06:9B9eifNBfZzVycBm@cluster0.opsjo7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, { })
const connection = mongoose.connection;


app.use("/api/root", userroute);
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
