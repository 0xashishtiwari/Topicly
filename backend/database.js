const { default: mongoose } = require("mongoose");

async function  DbConnect(){
    const DB_URL = process.env.DB_URL;
    try {
       const db = await mongoose.connect(DB_URL);
       console.log("DB Connected.....");
        
    } catch (error) {
        console.log('Error in connecting to database');       
    }
}

module.exports = DbConnect;