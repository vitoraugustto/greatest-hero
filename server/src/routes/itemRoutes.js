import { Router } from 'express';

import Item from '../models/Item';

const router = Router();

router.post('/', async (req, res) => {
  const {
    name, description, role, status,
  } = req.body;
  const item = {
    name, description, role, status,
  };

  if (!name || !description || !role || Object.keys(item.status).length === 0) {
    res.status(422).json({ error: 'Name, description, role and status are required.' });
    return;
  }

  try {
    await Item.create(item);

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/', async (_, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ _id: id });

    if (!item) {
      res.status(422).json({ message: 'Item not found.' });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  const {
    name, description, role, status,
  } = req.body;
  const item = {
    name, description, role, status,
  };

  try {
    const updatedItem = await Item.updateOne({ _id: id }, item);

    if (updatedItem.matchedCount === 0) {
      res.status(422).json({ message: 'Item not found.' });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOne({ _id: id });

  if (!item) {
    res.status(422).json({ message: 'Item not found.' });
    return;
  }

  try {
    await Item.deleteOne({ _id: id });

    res.status(200).json({ message: 'Item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
