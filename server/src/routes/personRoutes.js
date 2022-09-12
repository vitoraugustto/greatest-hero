import { Router } from "express"
import { Person } from '../models/Person.js'

const router = Router()

router.post('/', async (req, res) => {
    const { name, age } = req.body
    const person = { name, age }
      
    if (!name || !age) {
      res.status(422).json({ error: 'Name and age are required.' })
      return
    }
      
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Person created successfully.' })
    } catch (error) {
      res.status(500).json({ error: error })
    }
})  

router.get('/', async (_, res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
  } catch (error)  {
    res.status(500).json({ error: error })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'User not found.' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, age } = req.body
  
  const person = { name, age }

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person)

    if (updatedPerson.matchedCount === 0) { 
      res.status(422).json({ message: 'User not found.' })
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

export default router