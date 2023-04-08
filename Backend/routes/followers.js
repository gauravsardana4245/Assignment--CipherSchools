const express = require("express")
const router = express.Router();
const Follower = require("../Models/Follower")
const fetchuser = require("../middlewares/fetchuser")

router.get("/fetchallfollowers", fetchuser, async (req, res) => {
    const follower = await Follower.find({ user: req.user.id })
    res.json(follower);
})

module.exports = router