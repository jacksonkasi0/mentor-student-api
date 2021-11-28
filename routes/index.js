const router = require("express").Router();
const connectDB = require("../config/db");
const mentorRoute = require("./mentor");
const studentRoute = require("./student");

router.get("/", (req, res) => {
    res.json("server is running!")
})

router.use("/mentor", mentorRoute);
router.use("/student", studentRoute);

module.exports = router;
