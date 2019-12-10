const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    notes: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
mongoose.model( 'Contact', ContactSchema );

module.exports = ContactSchema ;