import mongoose from "mongoose";

export const Item = mongoose.model('Item', {
    name: String,
    description: String,
    role: String,
    status: {
        attack: Number,
        defense: Number,
    }
})
