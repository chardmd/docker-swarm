const express = require('express')
const app = express()
const os = require('os');
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>The request has been received by : ${os.hostname()}</h1>`);
})
app.listen(port, () => {
    console.log(`server started at port: ${port}`)
})
