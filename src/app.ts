import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./infrastructure/router/lead.route"

const port = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('tmp'))
app.use(`/`, router)

app.listen(port, () => console.log(`Ready...${port}`))