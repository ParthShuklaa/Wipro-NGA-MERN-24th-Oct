const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents);        // GET all
router.get("/:id", studentController.getStudentById); // GET by ID
router.post("/", studentController.createStudent);    // POST
router.put("/:id", studentController.updateStudent);  // PUT
router.delete("/:id", studentController.deleteStudent); // DELETE

module.exports = router;
