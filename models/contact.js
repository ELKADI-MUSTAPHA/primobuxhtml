const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    companyname: {
        type: String,
        required: true
    },
    companyemail: {
        type: String,
        required: true
    },
    companymessage: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;