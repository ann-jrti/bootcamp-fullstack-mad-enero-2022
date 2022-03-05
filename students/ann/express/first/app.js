import express from "express";
import { argv } from 'process'


const app = express()
const port = 6000;

const portParam = argv.slice(2, argv.length)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(portParam, () => {
    console.log(`Example app listening on port ${portParam}`)
})

