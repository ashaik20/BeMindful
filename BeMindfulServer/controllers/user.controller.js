const User = require('../models/user.model')
const router = require('express').Router()

router.route('/new').post()
router.route('/login').post()


// router.route('/').get()

// router.route('/delete/:id').delete()

// router.route('/update/:id').put()


router.route('/new').post((req, res)=>{
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))

})

router.route('/login').post((req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = User.findOne({email: email, password: password})
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
})


module.exports = router