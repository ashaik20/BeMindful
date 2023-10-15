const Data = require('../models/user.model')
const router = require('express').Router()


router.route('/daily').post()

router.route('/daily').post((req, res)=>{
    const newData = new Data(req.body)
    newData.save()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error! " + err))

})

module.exports = router
