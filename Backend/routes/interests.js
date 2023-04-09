const express = require("express")
const router = express.Router();
const Interest = require("../Models/Interest")
const fetchuser = require("../middlewares/fetchuser")

router.get("/fetchallinterests", fetchuser, async (req, res) => {
    const interest = await Interest.find({ user: req.user.id })
    res.json(interest);
})

// Add a new Interest 
router.post("/addinterest", fetchuser, async (req, res) => {
    let success = false;
    try {

        let interest = await Interest.findOne({ name: req.body.name })
        if (interest) {
            return res.status(400).json({ error: "Sorry an interest with this name already exists" });
        }
        interest = await Interest.create({
            name: req.body.name
        })
        success = true;
        res.json({ interest, success });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})

// Delete a Interest
router.delete("/deleteinterest", fetchuser, async (req, res) => {
    try {

        // Find the interest to be deleted and delete it
        let interest = await Interest.findOne({ name: req.body.name });
        if (!interest) {
            return res.status(400).send("Interest not found");
        }

        interest = await Interest.deleteOne({ name: req.body.name })
        res.json({ "Success": "Interest has been deleted successfully", interest: interest })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured");
    }
})


module.exports = router