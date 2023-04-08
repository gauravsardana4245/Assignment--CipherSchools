const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Gaurav:blankspace@cluster0.xhef3ce.mongodb.net/CipherSchools?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;