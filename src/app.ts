import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { managedRouter } from './app/routes/routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/share-wave/', managedRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
