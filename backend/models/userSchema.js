import { model, Schema } from 'mongoose';

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

const User = model('User', userSchema);
export default User;