const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Node World!')
})

app.get('/debug', (req, res) => {
    console.log('Headers:');
    console.log(req.headers);
    console.log('IP address:');
    console.log(req.ip);

    res.send('Debug output send to console')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})