import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

const app = express();
const PORT = 4000;

dotenv.config({
    path : `.env.${process.env.NODE_ENV}`
});

const host = process.env.host;

console.log(`Host: ${host}`)

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