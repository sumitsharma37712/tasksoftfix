
const express = require('express')
const { UserRegistration, OneUser, AllUser, updateUser, deleteRecord } = require('../Controller/userConteroller')
const router = new express.Router()
const { authLogin } = require('../Controller/authController')
const {authToken} = require('../middleware')

router.route('/usercreate').post(UserRegistration)

router.route('/login').post(authLogin)




router.route('/alluser').get(authToken,AllUser)
router.route('/userfind/:email').get(OneUser)
router.route('/userupdate/:id').put(authToken,updateUser)
router.route('/deleteuser/:id').delete(deleteRecord)

module.exports = router