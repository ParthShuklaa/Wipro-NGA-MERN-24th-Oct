// In this file we will implement following features:
// 1. Setup an Express server
// 2. Create a simple GET endpoint
// 3. Middleware for parsing form data
// 4. DB setup using mongoose for MongoDB connection
// 5. Serving static HTML form
// 6. POST route with validation + DB save
// 7. Success message + Error handling

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// ❗ FIXED: correct import from express-validator
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- Body Parsing Middleware --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------- MongoDB Connection --------------------
mongoose.connect('mongodb://localhost:27017/formDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// -------------------- Define Schema + Model --------------------
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Form = mongoose.model('Form', formSchema);

// -------------------- Serve Static HTML Form --------------------
app.use(express.static(path.join(__dirname, 'public')));

// -------------------- Simple GET Endpoint --------------------
app.get('/api', (req, res) => {
    res.send('Hello, this is the GET endpoint!');
});

// -------------------- POST Form Submission --------------------
app.post('/submit-form',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, message } = req.body;

        const newForm = new Form({ name, email, message });

        try {
            await newForm.save();
            res.status(201).json({ message: 'Form submitted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit form' });
        }
    }
);

// -------------------- Success Route --------------------
app.get('/success', (req, res) => {
    res.send('Form submitted successfully!');
});

// -------------------- Error Handling --------------------
app.use((req, res) => {
    res.status(404).send('Sorry, we could not find that route!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
