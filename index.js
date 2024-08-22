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

app.get('/ismail',(req,res) =>{
    res.send("i got u ismail")
})

app.listen(port,()=>{
    console.log(`your port is running ${port}`)
})