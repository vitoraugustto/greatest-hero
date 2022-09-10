import { Router } from "express"
import { Person } from '../models/Person.js'

const router = Router()

router.post('/', async (req, res) => {
    const { name, age } = req.body
    const person = { name, age }
      
    if (!name || !age) res.status(422).json({ error: 'Name and age are required.' })
      
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Person created successfully' })
    } catch (err) {
      res.status(500).json({ error: err })
    }
})  

export default router