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
    await Hero.updateOne({ _id: '632d3d924372d1879fb3a50f' }, hero);

    res.status(201).json(hero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
