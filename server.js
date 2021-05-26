/**
 *  1. Creating an express server
 *  2. Connect to mongodb
 *  2b. Connect to db
 *  3. Initialise express
 *  4. Initialise express middleware
 *  5. Create a simple get request home-route (optional)
 *  6. Define our routes
 *  7. Listen to our app connection
 */

//  1. Creating an express server
const express = require('express');
//2. Connect to mongodb
const connectDB = require('./db'); //this is inside db/index.js
require('dotenv').config(); // allows us to use the environmental variables in .env
const { PORT } = process.env;//or  process.env.PORT


//2b. Connect to db
connectDB();

//3. Initialise express
const app = express();

//4. Initialise Express middleware
app.use(express.json({ extended: false }));

//5. Create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Tutoring app!"}));

//7. Listen to connection
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`app running on port ${port}`));