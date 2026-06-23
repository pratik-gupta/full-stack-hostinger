import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:3000"
            // add prod domain
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