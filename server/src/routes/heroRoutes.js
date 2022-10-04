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
      { upsert: true, new: true }
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

    await Hero.findOneAndUpdate(
      {},
      {
        'status.attack': currentAttack + itemAttack,
        'status.defense': currentDefense + itemDefense,
      },
      { new: true }
    );

    res.status(200).json({ message: `'${item.name}' equipped.` });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/inventory', async (_, res) => {
  try {
    const hero = await Hero.find().select('inventory -_id');

    res.status(200).json(hero[0].inventory);
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
        res
          .status(400)
          .json({ error: `Item '${item.name}' already stored in inventory.` });
      }
    });

    await Hero.findOneAndUpdate(
      {},
      { inventory: [...hero.inventory, item] },
      { new: true }
    );

    res.status(200).json({
      message: `Item '${item.name}' stored in inventory successfully.`,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put('/inventory/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ _id: id });
    const hero = await Hero.findOne();

    const updatedInventory = hero.inventory.filter(
      (inventoryItem) => String(inventoryItem._id) !== id
    );

    await Hero.updateOne({}, { inventory: updatedInventory });

    res.status(200).json({
      message: `Item '${item.name}' removed from inventory successfully.`,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
