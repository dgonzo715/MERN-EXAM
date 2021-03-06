const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least three characters"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Pet type is rqeuired"],
        minlength: [3, "Must be at least three characters"]
    },
    description: {
        type: String,
        required: [true, "Give a brief description of the pet"],
        minlength: [3, "Description must be at least three characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number, default:0
    }
    }, 
    { timestamps: true }
);



module.exports.Pet = mongoose.model('Pet', PetSchema);