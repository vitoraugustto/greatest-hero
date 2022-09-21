import mongoose from 'mongoose';

const Item = mongoose.model('Item', {
  name: String,
  description: String,
  role: String,
  status: {
    attack: Number,
    defense: Number,
  },
});

export default Item;
