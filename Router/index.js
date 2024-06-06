
const express = require('express')
const { UserRegistration, OneUser, AllUser, updateUser, deleteRecord } = require('../Controller/userConteroller')
const { authLogin } = require('../Controller/authController')
const authToken = require('../middleware')
const router = new express.Router()

router.route('/usercreate').post(UserRegistration)

router.route('/login').post(authLogin)




router.route('/alluser').get(authToken,AllUser)
router.route('/userfind/:email').get(OneUser)
router.route('/userupdate/:id').put(updateUser)
router.route('/deleteuser/:id').delete(deleteRecord)

module.exports = router