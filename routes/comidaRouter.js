const express = require('express')
const router = express.Router()

router.get('/comida', (req,res)=>{
    return res.json({mensaje:"si te la rifaste"})

})
module.exports =  router
