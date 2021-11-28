const Mentor = require("../model/mentor");
const Student = require("../model/student");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Student router is working!");
});

router.post("/add", async (req, res) => {
  try {
    const student = new Student(req.body);
    const studentData = await student.save();
    const mentorData = await Mentor.findByIdAndUpdate(
      { _id: studentData.mentor },
      {
        $push: { students: studentData._id },
      },
      { new: true }
    );
    res.json({ student: studentData, mentor: mentorData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Student.find({}).populate("mentor", "-_id -__v").sort({name:1})
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
