import { Schema } from "mongoose";

export const messagesSchema = new Schema({
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})