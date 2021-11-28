const mongoose = require("mongoose");
const Mentor = require("../model/mentor");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Mentor router is working!");
});

router.post("/add", async (req, res) => {
  try {
    const mentor = await new Mentor(req.body);
    const mentorData = await mentor.save();
    res.json(mentorData);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Mentor.find({}).populate("students", "-_id -__v").sort({name:1})
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
