const User = require("../Database/Model/User")
const bcrypt = require('bcryptjs')

const UserRegistration = async (req, res) => {
    const { email, password, title, description, image } = req.body
    try {
        const hashpass = await bcrypt.hash(password, 10)
        const userExist = await User.findOne({ email })
        if (userExist) { res.json({ data: "userExist already", error: true, success: false }) } else {
            const user = await User.create({
                email, password: hashpass, title, description, image
            })
            data = await user.save()
        }
        res.json({
            data: data,
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



const AllUser = async (req, res) => {
    try {
        const user = await User.find()
        res.json({
            data: user,
            success: true,
            error: false
        })
    } catch (error) {
        res.json({
            error: true,
            message: "Error Occured" || error.message,
            success: false,
        })

    }
}

const OneUser = async (req, res) => {
    const { email } = req.params
    try {
        const user = await User.findOne({ email })
        res.json({
            data: user,
            success: true,
            error: false
        })
    } catch (error) {
        res.json({
            error: true,
            message: "Error Occured" || error.message,
            success: false,
        })

    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { title, description, image } = req.body
    try {
        const data = { title, description, image }
        const updateData = await User.findByIdAndUpdate(id, data)
        res.json({
            message: 'Update record',
            success: true,
            error: false,
            data: updateData
        })

    } catch (error) {
        res.json({
            error: true,
            message: error.message,
            success: false,
        })
        console.log(error)
    }



}

const deleteRecord = async (req, res) => {
    const { id } = req.params
    try {
        const Response = await User.findByIdAndDelete(id)
        res.json({
            data: Response,
            success: true,
            message: 'delete Records'
        })

    } catch (error) {
        res.json({
            error: true,
            message: error.message,
            success: false,
        })  

    }

}


module.exports = { UserRegistration, AllUser, OneUser, updateUser, deleteRecord }