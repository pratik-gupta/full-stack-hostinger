import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 4000;

const host = process.env.host || localhost;

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://${host}:5174",
            "http://${host}:3000"
        ]
    }
))

app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello! Hostinger!'
    })
})

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`)
})