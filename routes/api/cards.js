const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/new', async (req,res) => {
  try{
    console.log("searching")
    let deckObject = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle").then(response => response.json());
    console.log(deckObject)


  } catch(e) {
    console.log(e)
  }
})

module.exports = router