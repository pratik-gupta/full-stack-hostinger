import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

const app = express();
const PORT = 4000;

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})

const host = process.env.host || localhost;

app.use(express.json())
app.use(cors(
    {
        origin: [
            `http://${host}:5174`,
            `http://${host}:3000`
        ]
    }
))

app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello! Hostinger!'
    })
})

app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT} and ENV ${process.env.NODE_ENV}`)
})