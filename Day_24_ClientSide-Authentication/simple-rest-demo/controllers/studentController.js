// Controllers is resiponsible for having business logic
// here we can define temprary in memory data/array of students for implementing CRUD operations

let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Sam Brown', age: 19 }
];


// Get all students using controller ie exports.Get()
exports.getAllStudents = (req, res) => {
    res.json(students);
};

// Get a student by ID
exports.getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id);  
    const student = students.find(s => s.id === studentId); 
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

// Create a new student
exports.createStudent = (req, res) => {
    const newStudent = {    
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
};  
// Update a student by ID
exports.updateStudent = (req, res) => {
    const studentId = parseInt(req.params.id);  
    const student = students.find(s => s.id === studentId);
    if (student) {
        student.name = req.body.name || student.name;
        student.age = req.body.age || student.age;
        res.json(student);
    }
    else {
        res.status(404).json({ message: 'Student not found' });
    }   
};  
// Delete a student by ID
exports.deleteStudent = (req, res) => {
    const studentId = parseInt(req.params.id);  
    const index = students.findIndex(s => s.id === studentId);
    if (index !== -1) {
        students.splice(index, 1);
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

