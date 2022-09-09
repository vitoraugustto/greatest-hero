import express from 'express';
import mongoose from 'mongoose'
import { Person } from './models/Person.js'
import { DB_PASSWORD, DB_USERNAME } from './.env.js';

const app = express()
const PORT = 8000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/person', async (req, res) => {
    const { name, age } = req.body
    const person = { name, age }
    
    if (!name) {
        res.status(422).json({ error: 'Name and age are required.' })
    }
    
    try {
        await Person.create(person)

        res.status(201).json({ message: 'Person created successfully' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@heros-market-cluster.mcfekrd.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT, () => {
        console.log('App listening on port', PORT)
    })
})
.catch(err => console.log(err))