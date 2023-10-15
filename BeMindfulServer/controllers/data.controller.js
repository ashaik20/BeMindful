const Data = require('../models/data.model')
const router = require('express').Router()


router.route('/daily').post()

router.route('/moods').get()

router.route('/daily').post((req, res)=>{
    const newData = new Data(req.body)
    newData.save()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error! " + err))

})

router.route('/moods').get((req, res) => {
    Data.find()
      .select('mood') // Specify the 'mood' field to select
      .then(data => res.json(data))
      .catch(err => res.status(400).json("Error! " + err))
})

module.exports = router
