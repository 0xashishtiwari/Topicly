require('dotenv').config();
const router = require('./routes/Routes');
const express = require('express')
const DbConnect = require('./database');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://yourfrontend.com"], // frontend URLs
  credentials: true, // allow cookies & auth headers
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"] // allowed custom headers
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json());
app.use(router);

app.get('/' , (req , res)=>{
    res.send("HEllo")
})


app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`);
})