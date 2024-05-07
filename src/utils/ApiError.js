class ApiError extends Error {
    constructor (
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""   // it means error stack
    ){
        super(message)   // here we call super to overwrite message 
        this.statusCode = statusCode 
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }


    }
}
export {ApiError}