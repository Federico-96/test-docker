const express  = require('express');
const server = express();
console.log('index.js started')

server.use(express.json())
server.get('/', async (req, res)=>{
    res.send('hello world')
})
server.post('/', async (req, res)=>{
    res.json(`your body is ${JSON.stringify(req.body)}`)
})

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
server.listen(PORT, HOST, ()=>{
    console.log(`server liosten at port http://${HOST}:${PORT}`)
})