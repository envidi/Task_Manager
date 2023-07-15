const { createCustomError,CustomAPIError} = require('../errors/custom-error.js')

const errorHandleMiddleware = function(err,req,res,next){
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({message : err.message})
    }
    return res.status(500).json({message : "Something went wrong.Try again later"})
}
module.exports = errorHandleMiddleware