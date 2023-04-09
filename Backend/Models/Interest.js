const mongoose = require('mongoose');
const { Schema } = mongoose;

const InterestSchema = new Schema({
    name: {
        type: String
    }
});

const Interest = mongoose.model("interest", InterestSchema)
Interest.createIndexes();
module.exports = Interest