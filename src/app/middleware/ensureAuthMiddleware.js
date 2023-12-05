const jwt = require('jsonwebtoken');

const ensureAuthMiddleware = (request, response, next) => {
    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({
            message: "Invalid token",
        });
    }

    const splitedToken = token.split(" ")[1];

    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
        return response.status(500).json({
            message: "Internal Server Error: Missing secret key",
        });
    }

    jwt.verify(
        splitedToken,
        secretKey,
        (error, decoded) => {
            if (error) {
                return response.status(401).json({
                    message: "Invalid token",
                });
            }

            response.locals.userId = decoded.sub;

            return next();
        }
    );
};

module.exports = { ensureAuthMiddleware };
