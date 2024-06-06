const jwt = require('jsonwebtoken')

const authToken = async (req, res, next) => {
    try {
        const token = req?.cookies?.token 

        if (!token) {
            res.json({
                error: true,
                message: 'user not login',
                success: false,
            })
        }
        jwt.verify(token, 'tokensecretkey', (err, decode) => {
            if (err) {
                return res.status(200).json({
                    error: true,
                    message: err,
                    success: false,
                });
            }
            userId = decode?.id
            next()
        })
    } catch (error) {
        res.json({
            error: true,
            message: error.message || error,
            success: false,
            data: []
        }).status(400)
    }
}
module.exports = {authToken}