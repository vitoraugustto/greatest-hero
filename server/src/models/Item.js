import mongoose from 'mongoose';

const { Schema } = mongoose;

export const itemSchema = new Schema({
  name: String,
  description: String,
  role: String,
  status: {
    attack: Number,
    defense: Number,
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
