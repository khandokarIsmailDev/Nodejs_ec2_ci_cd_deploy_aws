import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const app = express()

app.get('/',(req,res) =>{
    res.json({
        "name":"ismail",
        "age":26
    })
})

app.listen(port,()=>{
    console.log(`your port is running ${port}`)
})