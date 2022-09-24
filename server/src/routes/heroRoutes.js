import { Router } from 'express';

import Hero from '../models/Hero.js';
import Item from '../models/Item.js';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const hero = await Hero.find().select('-inventory');

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

router.patch('/equip-item/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Hero.findOne();
    const item = await Item.findOne({ _id: id });

    const currentAttack = hero.status.attack;
    const currentDefense = hero.status.defense;
    const itemAttack = item.status.attack;
    const itemDefense = item.status.defense;

    const updatedHero = await Hero.findOneAndUpdate(
      {},
      {
        'status.attack': currentAttack + itemAttack,
        'status.defense': currentDefense + itemDefense,
      },
      { new: true },
    ).select('-inventory');

    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/inventory/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ _id: id });
    const hero = await Hero.findOne();

    hero.inventory.forEach((inventoryItem) => {
      if (String(inventoryItem._id) === id) {
        res.status(400).json({ error: 'Item already stored.' });
      }
    });

    const updatedHero = await Hero.findOneAndUpdate(
      {},
      { inventory: [...hero.inventory, item] },
      { new: true },
    );

    res.status(200).json(updatedHero.inventory);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
