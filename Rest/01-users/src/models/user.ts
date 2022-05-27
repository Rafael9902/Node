import { Schema, model } from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';

const userSchema = new Schema<UserInterface>({
    name: {type: String, required: [true, 'required name']},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, 
    image: {type: String},
    role: {type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROLE']},
    state: {type: Boolean, default: true},
    google: {type: Boolean, default: false}
})

export default model<UserInterface>('User', userSchema);
