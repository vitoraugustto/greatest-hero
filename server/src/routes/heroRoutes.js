import { Router } from 'express';

import Hero from '../models/Hero.js';
import Item from '../models/Item.js';

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
      {
        ...hero,
        status: { attack: 1, defense: 0, hp: 100 },
        inventory: [],
        equippedItems: [],
      },
      { upsert: true, new: true }
    );

    res.status(201).json(createdHero);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/equip-item/:id', async (req, res) => {
  const { id } = req.params;
  let itemFoundInInventory;
  let itemAlreadyEquipped;

  try {
    const hero = await Hero.findOne();
    const item = await Item.findOne({ _id: id });

    const currentAttack = hero.status.attack;
    const currentDefense = hero.status.defense;
    const itemAttack = item.status.attack;
    const itemDefense = item.status.defense;

    itemFoundInInventory = hero.inventory.some(
      (inventoryItem) => String(inventoryItem._id) === id
    );

    itemAlreadyEquipped = hero.equippedItems.some(
      (inventoryItem) => String(inventoryItem._id) === id
    );

    if (itemFoundInInventory && !itemAlreadyEquipped) {
      await Hero.findOneAndUpdate(
        {},
        {
          'status.attack': currentAttack + itemAttack,
          'status.defense': currentDefense + itemDefense,
          equippedItems: [...hero.equippedItems, item],
        },
        { new: true }
      );

      res.status(200).json({ message: `'${item.name}' equipped.` });
    } else {
      throw new Error();
    }
  } catch (error) {
    if (itemAlreadyEquipped) {
      res.status(400).json({ error: 'Item already equipped.' });
    } else if (!itemFoundInInventory && !itemAlreadyEquipped) {
      res.status(400).json({ error: 'Item not found in inventory.' });
    } else {
      res.status(500).json({ error });
    }
  }
});

router.post('/inventory/:id', async (req, res) => {
  const { id } = req.params;
  let itemAlreadyStored;

  try {
    const item = await Item.findOne({ _id: id });
    const hero = await Hero.findOne();

    hero.inventory.forEach((inventoryItem) => {
      if (String(inventoryItem._id) === id) {
        itemAlreadyStored = item.name;

        throw new Error();
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
    if (itemAlreadyStored) {
      res.status(400).json({
        error: `Item '${itemAlreadyStored}' already stored in inventory.`,
      });
    } else {
      res.status(500).json({ error });
    }
  }
});

router.put('/inventory/:id', async (req, res) => {
  const { id } = req.params;
  let itemFound = false;

  try {
    const item = await Item.findById(id);
    const hero = await Hero.findOne();

    const currentAttack = hero.status.attack;
    const currentDefense = hero.status.defense;
    const itemAttack = item.status.attack;
    const itemDefense = item.status.defense;

    itemFound = hero.equippedItems.some(
      (equippedItem) => String(equippedItem._id) === id
    );

    if (itemFound) {
      const updatedEquippedItems = hero.equippedItems.filter(
        (equippedItem) => String(equippedItem._id) !== id
      );

      await Hero.updateOne(
        {},
        {
          equippedItems: updatedEquippedItems,
          'status.attack': currentAttack - itemAttack,
          'status.defense': currentDefense - itemDefense,
        }
      );

      res.status(200).json({
        message: `Item '${item.name}' unequipped successfully.`,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    if (!itemFound) {
      res.status(400).json({ error: 'Item not equipped.' });
    } else {
      res.status(500).json({ error });
    }
  }
});

router.put('/inventory/:id', async (req, res) => {
  const { id } = req.params;
  let itemFound = false;

  try {
    const item = await Item.findOne({ _id: id });
    const hero = await Hero.findOne();

    itemFound = hero.inventory.some(
      (inventoryItem) => String(inventoryItem._id) === id
    );

    if (itemFound) {
      const updatedInventory = hero.inventory.filter(
        (inventoryItem) => String(inventoryItem._id) !== id
      );

      await Hero.updateOne({}, { inventory: updatedInventory });

      res.status(200).json({
        message: `Item '${item.name}' removed from inventory successfully.`,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    if (!itemFound) {
      res.status(400).json({ error: 'Item not found in inventory.' });
    } else {
      res.status(500).json({ error });
    }
  }
});

export default router;
