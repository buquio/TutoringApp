/**
 *  1. Start a local mongodb server connection
 *  2. Create a connection function for mongodb
 * 
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

////// Create the connection function
// const connectDB = () => {
//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log("MongoDB connected...");  //and  Send data
//   })
//   .catch((err) => {
//     console.error(err.message);

//     // Exit with failure   // process.exit(1); 
//   })
// }

////// Create the connection function using Async + try/catch
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log("MongoDB connected...");  //and  Send data
  } catch (err) {
    console.error(err.message);

    process.exit(1); // Exit with failure

  }
}


module.exports = connectDB;