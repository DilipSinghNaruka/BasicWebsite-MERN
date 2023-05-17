const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/db");
const User = require("../model/userSchema");
const authenticate = require("../middelware/authenticate");
router.use(cookieParser());

// api

router.get("/", (req, res) => {
  res.send("this is home page");
});

router.post("/register", async (req, res) => {
  const { name, email, work, phone, password, cpassword } = req.body;
  if (!name || !email || !work || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Fill All Input Columns" });
  }

  try {
    const userExits = await User.findOne({ email: email });
    if (userExits) {
      return res.status(422).json({ error: "Email Already Exits" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password and Cpassword is not matched" });
    } else {
      const user = new User({ name, email, work, phone, password, cpassword });
      await user.save();
      console.log(user);
      res.status(201).json({ message: "User Successfully Register" });
    }
  } catch (error) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: "Fill the all columns" });
    }

    const userLogin = await User.findOne({ email: email });
    let isMatch = false;

    if (userLogin) {
      isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
    }

    if (!isMatch) {
      res.status(422).json({ error: "email or password is not same" });
    } else {
      // res.status(400).json({ message: "user signin Successfully" });
      res.status(201).json({ message: "Login Successfull" });
    }
  } catch (error) {
    console.log(error);
  }
});
// page of about page 
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
  // console.log(req.rootUser);

});

router.get('/getdata', authenticate, (req,res)=>{
  res.send(req.rootUser);
})

router.post('/contact', authenticate, async(req,res)=>{
  try {
    const {name,email,phone,message} = req.body;
    if(!name || !email || !phone || !message){
      console.log("Error in contact form");
      return res.json({error:"plzz filled the contact form"})
    }
    const userContact = await User.findOne({_id:req.userID});
    if(userContact){
      const userMessage = await userContact.addMessage(name,email,phone,message)
      await userContact.save();
      res.status(201).json({message:"user contact successfully"});
    }
    
  } catch (error) {
    console.log(error);
    
  }
})
router.get("/logout", (req, res) => {
  res.clearCookie('jwtoken', )
  res.status(200).send('User Logout');
  // console.log(req.rootUser);
});

module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();
// const User = require("../model/userSchema");
// require("../db/db");

// // Define API routes
// router.get("/", (req, res) => {
//   res.send("This is the home page");
// });

// router.post("/register", (req, res) => {
//   const { name, email, work, phone, password, cpassword } = req.body;
//   if (!name || !email || !work || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill in all input fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExists) => {
//       if (userExists) {
//         return res.status(422).json({ message: "User already exists" });
//       }
//       const user = new User({ name, email, work, phone, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User successfully registered" });
//         })
//         .catch((err) => {
//           res
//             .status(501)
//             .json({ message: "Server side error, user not saved" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// module.exports = router;
