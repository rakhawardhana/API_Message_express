
// make router works to create API using express
const express = require('express')
const router = express.Router()
const { messages } = require('../messages') 
const fs = require('fs')

//const filename = path.resolve('../data/data.json')
const filename = '../back-end/src/data/data.json'


// make API to access data.json as an array that would contain many objects after be inputed by this API
router.post('/', async (req, res) => {

    
    // Create object message contains property of parameter string(messagebody), that will be pushed to array of object(messages)
    const message = {
        createdAt : new Date().toString(),
        messagebody: req.body
    }

    messages.push(message)

    // Make exist file ('../back-end/src/data/data.json') works, It will contain specific data including parameter string that have just been pushed)
    fs.writeFile(filename, JSON.stringify(messages), (err) => {
       
        if (err) {
            console.log(err)
            return res.send(err)
        }

        // create response
        return res.send('Berhasil Diinput')
        
    })
})

// Make API for accessing data, and returned as response that contain array of objects that collect all input message
router.get('/', async (req, res) => {

    fs.writeFile(filename, JSON.stringify(messages), (err) => {
        
        if (err) {
            console.log(err)
            return res.send(err)
        }
        
        // Show all data (array of objects)
        return res.json(messages)
        
    })
})

module.exports = router
