import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {


    try {

        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email }) // matching email in DB exist or already or not 
        if (user) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hashPassword = await bcryptjs.hash(password, 10)//10 =>more secure  and this line is to bcrypt password in db

        const createdUser = new User({

            fullname: fullname,
            email: email,
            password: hashPassword
        });
        await createdUser.save();
        res.status(201).json({ message: "user created successfully" ,
            user:{
                _id:createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        })
    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({ message: "internal server error" })


    }
}

// for login ---code -----

export const login = async (req, res) => {


    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email })// same code as above to find existing email
        const isMatch=await bcryptjs.compare(password,user.password)// password-user giving, user.password=>db-saved password
        if(!user || !isMatch){

            return res.status(400).json({message: "invalid username or password"});
        }
        else{
            res.status(200).json({message: "Login Successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
console.log("error"+error.message)
res.status(500).json({ message: "internal server error" })
    }
}