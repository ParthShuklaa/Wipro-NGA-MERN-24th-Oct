// student.js will be uased for following CRUD operations for student entity ( In momeory storage  , using arrray of objects    )
// 1. Create a new student - POST /students
// 2. Get all students - GET /students
// 3. Get a student by ID - GET /students/:id
// 4. Update a student by ID - PUT /students/:id
// 5. Delete a student by ID - DELETE /students/:id
// Creating a json file as student.json to store student data is optional here as we are using in-memory storage

const express = require('express');// Import express module
const router = express.Router();// Create a router instance
let students = []; // In-memory storage for students
let currentId = 1; // To generate unique IDs    


// Create a new student - POST /students
router.post('/', (req, res) => {
  const student = { id: currentId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
});
// Get all students - GET /students
router.get('/', (req, res) => {
  res.json(students);
});
// Get a student by ID - GET /students/:id
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) { // If student not found, send 404 response validation LOGIC
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
});
// Update a student by ID - PUT /students/:id
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) { // If student not found, send 404 response validation LOGIC
    return res.status(404).json({ message: 'Student not found' });
    }
    Object.assign(student, req.body);
    res.json(student);
});
// Delete a student by ID - DELETE /students/:id
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) { // If student not found, send 404 response validation LOGIC 
    return res.status(404).json({ message: 'Student not found' });
    }
    students.splice(index, 1);
    res.json({ message: 'Student deleted successfully' });
}); 
module.exports = router; // Export the router to be used in index.js    