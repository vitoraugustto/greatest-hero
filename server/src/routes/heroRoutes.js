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
  const { name, role, status } = req.body;
  const hero = { name, role, status };

  try {
    await Hero.updateOne({}, hero, { upsert: true });

    res.status(201).json(hero);
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
      { status: heroStatus },
      { new: true },
    );

    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
