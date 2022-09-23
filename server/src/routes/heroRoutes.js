import { Router } from 'express';

import Hero from '../models/Hero.js';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const hero = await Hero.find();

    res.status(200).json(...hero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/', async (req, res) => {
  const { name, role } = req.body;
  const hero = { name, role };

  try {
    const createdHero = await Hero.findOneAndUpdate(
      {},
      { ...hero, status: { attack: 1, defense: 0, hp: 100 } },
      { upsert: true, new: true },
    );

    res.status(201).json(createdHero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.patch('/', async (req, res) => {
  const { attack, defense } = req.body;
  const heroStatus = { attack, defense };

  try {
    const hero = await Hero.find();
    const updatedHero = await Hero.findOneAndUpdate(
      { _id: hero[0]._id },
      { 'status.attack': heroStatus.attack, 'status.defense': heroStatus.defense },
      { new: true },
    );

    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
