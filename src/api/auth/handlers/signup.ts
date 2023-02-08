import User from "../../../models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

const register = (req: Request, res: Response, next: NextFunction) => {
    bcrypt.hash(req.body?.password, 10, function(err, hashedPassword) {
        if(err){
            res.json({message: "Cannot crypt the password"})
        }
        let user = new User ({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: hashedPassword
        })
        user.save()
        .then(user => {
            res.json({
                message: "User added"
            })
    
        })
        .catch(error => {
            res.json({
                message: "Cannot add the user"
            })
        })
    })
}
 export default register;