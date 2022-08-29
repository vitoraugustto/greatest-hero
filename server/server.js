import express from 'express';
import mongoose from 'mongoose'
import { Person } from './models/Person.js'

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
    
    if (!name) {
        res.status(422).json({ error: 'Name and age are required.' })
    }
    
    const person = { name, age }

    try {
        await Person.create(person)

        res.status(201).json({ message: 'Person created successfully' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
    
})


const DB_USER = 'vitoraugustto'
const DB_PASSWORD = ''

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@heros-market-clust.tskbhjh.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT, () => {
        console.log('App listening on port', PORT)
    })
})
.catch(err => console.log(err))