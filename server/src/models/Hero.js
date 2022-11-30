import mongoose from 'mongoose';

import { itemSchema } from './Item.js';

const { Schema } = mongoose;

const heroSchema = new Schema(
  {
    name: String,
    role: String,
    status: {
      attack: Number,
      defense: Number,
      hp: Number,
    },
    inventory: [itemSchema],
    equippedItems: [itemSchema]
  },
  { timestamps: true }
);

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
