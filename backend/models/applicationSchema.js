const { model, Schema } = require('mongoose');

const applicationSchema = new Schema({
    company: String,
    position: String,
    applyDate: String,
    responseDate: String,
    response: String,
    url: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

module.exports = model('Application', applicationSchema);