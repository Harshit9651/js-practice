const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const SignupRoute = require("./routes/signuproute")
require('./connection/connect');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',SignupRoute)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
