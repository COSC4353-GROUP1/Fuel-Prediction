/**
 * connect to DB
 */
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.nvgidv8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

export async function connectDB() {
  try {
    await mongoose.connect(uri);
    // Send a ping to confirm a successful connection
    await client.db('Fuel-Prediction').command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log(error)
  }
}