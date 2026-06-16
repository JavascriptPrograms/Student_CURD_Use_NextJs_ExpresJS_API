const express = require('express');
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get('/student',studentController.getStudent);
router.post("/addStudent", studentController.addStudent);
router.delete("/student/:id", studentController.deleteStudent);
router.put("/student/:id",studentController.updateStudent);
router.get("/student/:id", studentController.getIdStudent);

module.exports = router;