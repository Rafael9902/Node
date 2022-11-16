import { Schema, model } from "mongoose";

const RoleSchema = new Schema({
    role: { type: String, required: [true, 'role required'] }
})

export default model('Role', RoleSchema)