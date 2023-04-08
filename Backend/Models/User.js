const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        require
    }
});
const User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;