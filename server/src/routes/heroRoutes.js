import { Router } from 'express';
import mongoose from 'mongoose';

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
        gold: 0,
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
  let itemTypeAlreadyEquipped;

  try {
    const hero = await Hero.findOne();
    const item = hero.inventory.find((item) => String(item._id) === id);

    itemTypeAlreadyEquipped = hero.equippedItems.some(
      (equippedItem) => equippedItem.type === item.type
    );

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

    if (
      itemFoundInInventory &&
      !itemAlreadyEquipped &&
      !itemTypeAlreadyEquipped
    ) {
      const updatedInventory = hero.inventory.filter(
        (inventoryItem) => String(inventoryItem._id) !== id
      );

      await Hero.findOneAndUpdate(
        {},
        {
          'status.attack': currentAttack + itemAttack,
          'status.defense': currentDefense + itemDefense,
          equippedItems: [...hero.equippedItems, item],
          inventory: updatedInventory,
        },
        { new: true }
      );

      res.status(200).json({ message: `Item '${item.name}' equipped.` });
    } else if (itemAlreadyEquipped) {
      throw `Item '${item.name}' already equipped.`;
    } else if (!itemFoundInInventory && !itemAlreadyEquipped) {
      throw `Item '${item.name}' not found in inventory.`;
    } else if (itemTypeAlreadyEquipped) {
      throw `Item of type '${item.type}' already equipped. You can only have one item of the same type equipped.`;
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put('/unequip-item/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Hero.findOne();
    const item = hero.equippedItems.find((item) => String(item._id) === id);

    const currentAttack = hero.status.attack;
    const currentDefense = hero.status.defense;
    const itemAttack = item.status.attack;
    const itemDefense = item.status.defense;

    if (item) {
      const updatedEquippedItems = hero.equippedItems.filter(
        (equippedItem) => String(equippedItem._id) !== id
      );

      await Hero.updateOne(
        {},
        {
          'status.attack': currentAttack - itemAttack,
          'status.defense': currentDefense - itemDefense,
          equippedItems: updatedEquippedItems,
          inventory: [...hero.inventory, item],
        }
      );

      res.status(200).json({
        message: `Item '${item.name}' unequipped successfully.`,
      });
    } else {
      throw 'Item not equipped.';
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post('/inventory/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ _id: id });
    const hero = await Hero.findOne();

    item._id = new mongoose.Types.ObjectId();

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
  let itemFound = false;

  try {
    const hero = await Hero.findOne();

    itemFound = hero.inventory.find(
      (inventoryItem) => String(inventoryItem._id) === id
    );

    if (itemFound) {
      const updatedInventory = hero.inventory.filter(
        (inventoryItem) => String(inventoryItem._id) !== id
      );

      await Hero.updateOne({}, { inventory: updatedInventory });

      res.status(200).json({
        message: `Item '${itemFound.name}' removed from inventory successfully.`,
      });
    } else {
      throw 'Item not found in inventory.';
    }
  } catch (error) {
    if (!itemFound) {
      res.status(400).json({ error });
    } else {
      res.status(500).json({ error });
    }
  }
});

export default router;
