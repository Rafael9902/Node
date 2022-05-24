const { Schema, model } = require('mongoosse');

const userSchema = Schema({
    name: {type: String, required: [true, 'required name']},
    email: {type: String, required: true, unique: true},
    password: {type: String, required},
    image: {type: String},
    role: {type: String, required, enum: ['ADMIN_ROLE', 'USER_ROLE']},
    state: {type: Boolean, default: true},
    google: {type: Boolean, default: false}
})

module.exports = model('User', userSchema);