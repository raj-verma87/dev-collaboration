
const errorMiddleware = (err, req, res, next)=> {
    console.error("error:",err.message);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
}

module.exports = errorMiddleware;
