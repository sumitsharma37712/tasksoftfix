
const bcrypt = require('bcryptjs')
const User = require('../Database/Model/User')
const jwt = require('jsonwebtoken')
const authLogin = async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        const haspass = await bcrypt.compare(password, user.password)
        data = {
            id: user._id,
            email: user.email,
            description: user.description,
            title: user.title,
            type:'USER'
        }
        const token = jwt.sign(data, 'tokensecretkey', { expiresIn: '2d' })
        res.json({
            token: token,
            success: true,
            error: false
        })



    } catch (error) {
        res.json({
            error: true,
            message: error.message,
            success: false,
        })

    }


}

module.exports = { authLogin }