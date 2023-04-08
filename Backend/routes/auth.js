const express = require("express")
const router = express.Router();
const User = require("../Models/User")
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require("../middlewares/fetchuser")

let success = false;
const JWT_SECRET = "gauravisagoodb$oy"

//Fetching all users
router.get("/fetchallusers", async (req, res) => {
    const user = await User.find({})
    res.json(user);
})

// Creating a route to sign up
router.post("/createuser", [
    body('firstname', 'Enter a valid name').isLength({ min: 2 }),
    body('lastname', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email address').isEmail(),
    body('phone'),
    body('password', 'Password must be atleast 5 characters long').isLength({ min: 5 })

], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: secPass,
            phone: req.body.phone,
            email: req.body.email
        })

        // .then(user => res.json(user))
        //     .catch(err => {
        //         console.log(err)
        //         res.json({ error: "Please enter a unique value for email" })
        //     })
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success, authtoken, name: user.name });
        // console.log(authtoken);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

//Creating a route for login
router.post("/login", [
    body('email', 'Enter a valid email address').isEmail(),
    body('password', 'Password cannot be blank').exists()],
    async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ success, error: "Please try to login with correct credentials: Entered email does not exist" });
            }
            const comparePassword = await bcrypt.compare(password, user.password);
            if (!comparePassword) {

                return res.status(400).json({ success, error: "Please try to login with correct credentials : Password incorrect" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authtoken, name: user.name });
            // console.log(authtoken);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error occured");
        }



    })

//Updating user details
router.put("/updateuser/:id", fetchuser, async (req, res) => {
    let { firstname, lastname, email, phone } = req.body;
    try {

        // Create a new contact object
        const newUser = {};
        if (firstname) { newUser.firstname = firstname }
        if (lastname) { newUser.lastname = lastname }
        if (email) { newUser.email = email }
        if (phone) { newUser.phone = phone }

        // Find the contact to be updated and update it
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).send("User not found");
        }

        user = await User.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ user })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

router.get("/getuser", fetchuser, async (req, res) => {
    try {
        const userid = req.user.id;
        const user = await User.findById(userid).select("-password")
        res.status(200).json({ user, name: user.name });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }

})

//Updating password
router.put("/updatepassword/:id", fetchuser, async (req, res) => {
    let { cpassword, npassword, cnpassword } = req.body;
    try {

        // Encrypting the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(npassword, salt);

        // Find the contact to be updated and update it
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).send("User not found");
        }
        const comparePassword = await bcrypt.compare(cpassword, user.password);
        if (!comparePassword) {

            return res.status(400).json({ success, error: "Please try to login with correct credentials : Password incorrect" });
        }
        if (npassword === cnpassword) {
            user = await User.findByIdAndUpdate(req.params.id, { $set: { "password": secPass } }, { new: true });
            success = true;
            res.json({ user, success })
        }
        else {
            return res.status(400).json({ success, error: "Passwords do not match" });
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

module.exports = router