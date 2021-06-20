
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const express = require('express')

const router2 = express.Router()


const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
    length: 2
  }); // big-donkey
  

router2.get('/', (req, res) => {
    // res.send(`hello, ${shortName}`)
    res.render('index')
})


module.exports = router2;