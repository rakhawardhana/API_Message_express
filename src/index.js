
const express = require('express')
const cors = require('cors')
const powrt = require('./config/port')
const port = powrt
const data = require('./routers/data')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(data)


// Testing connection in port 2019, using 'npm start'
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

// Port based on port in ./config/port settings (http://localhost:2019/)
app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})
