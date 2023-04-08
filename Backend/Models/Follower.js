const mongoose = require('mongoose');
const { Schema } = mongoose;

const FollowerSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    followerscount: {
        type: Number
    }
})

const Follower = mongoose.model("follower", FollowerSchema);
Follower.createIndexes();
module.exports = Follower;