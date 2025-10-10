const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: String
});

module.exports = model('user', userSchema);