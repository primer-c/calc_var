const express = require('express')
const path = require('path')

const server = express()

server.use(express.static(path.join(__dirname,'assert')))

const port = process.env.NODE_ENV | 3000

server.listen(port,()=>console.log(`Server listen on port: ${port}...`))