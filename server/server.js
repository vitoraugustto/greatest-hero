import express from 'express'
import mongoose from 'mongoose'
import { DB_PASSWORD, DB_USERNAME } from './.env.js'
import personRoutes from './src/routes/personRoutes.js'
const app = express()
const PORT = 8000

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
app.use('/person', personRoutes)

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@heros-market-cluster.mcfekrd.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(PORT, () => {
      console.log('App listening on port', PORT)
    })
  })
  .catch(err => console.log(err))