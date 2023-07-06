import jwt from "jsonwebtoken"
import { createError } from "./errorhandler.js"

export const verifyToken = async (req, res, next) => {
    const token = await req.cookies.access_token;
    console.log("verify token" + token);
    if (!token) {
        return next(createError(401, "you are not authenticated"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            console.log("not a valid token");
            return next(createError(401, "token is not valid"));
        }

        req.user = user;
        next();
    })

}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return next(createError(401, "You are not authorized"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            return next(createError(403, "You are nor authorized admin"))
        }
    })
}