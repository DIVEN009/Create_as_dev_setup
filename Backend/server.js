const express = require('express')

const port = process.env.POST||9090

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{

    res.send("This is home root")
})

app.listen(port,()=>{
    console.log(`This server is running at port ${port}`)
})