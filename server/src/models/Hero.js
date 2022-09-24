import mongoose from 'mongoose';

const Hero = mongoose.model('Hero', {
  name: String,
  role: String,
  status: {
    attack: Number,
    defense: Number,
    hp: Number,
  },
  inventory: Array,
});

export default Hero;
