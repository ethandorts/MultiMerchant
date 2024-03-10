import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    StreetAddress: {type: String, required: true, minlength:5, maxlength: 150},
    City: { type: String, required: true, minlength:3},
    PostCode: { type: String, required: true, validate: {validator: function(postcode_value) { return /^(BT\d{1,3} ?\d[ABD-HJLNP-UW-Z]{2})$/i.test(postcode_value);}}},
    Country: { type: String, required: true}
})

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        maxlength: 20
    },
    Surname: {
        type: String,
        required: true,
        maxlength: 20
    },
    Address: {
        type: addressSchema,
        required: true
    },
    DOB: {
        type: Date,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
        validate: {
            validator: function(email_address_value) {
                return /^\S+@\S+\.\S+$/.test(email_address_value);
            }
        }
    }, 
    Username: {
        type: String,
        required: true, 
        unique: true,
        maxlength:20
    },
    Password: {
        type: String,
        required: true,
        minlength: 7
    }
})

const User = mongoose.model('User', UserSchema);

export default User;