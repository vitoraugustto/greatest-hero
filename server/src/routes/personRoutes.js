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


export default router