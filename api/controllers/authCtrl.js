import User from "../model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createError } from "../utils/errorhandler.js"


export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            addharNo: req.body.addharNo,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User has been created")

    } catch (error) {
        next(error)
    }

}
export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        // chekc user exist or not
        if (!user) return next(createError);
        // now check the password he enter is correct or not
        const isPassword = await bcrypt.compare(req.body.password, user.password);
      if(!isPassword)
        return next(createError(400, "wrong password or username"));
        // making the jwt and send using cookies
        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT);

        const {password, ...other} = user._doc;
        res.status(200).json({...other,token});
        console.log('login successfully');
    } catch (error) {
        next(error)
    }

}