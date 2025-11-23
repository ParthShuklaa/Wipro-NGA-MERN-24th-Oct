// here we will implement Role Base access controll (RBAC) in a simple Express.js server

// Step 1: Set up the Express server
//Step 2: Define user roles and permissions
//Step 3: Create middleware to check permissions
//Step 4: Define routes with role-based access control

const express = require('express'); 
const app = express();
const PORT = 3000;

// Step 2: Define user roles and permissions 
const users = {
    alice: { role: 'admin' },
    bob: { role: 'editor' },
    charlie: { role: 'viewer' }
};

const rolesPermissions = {
    admin: ['read', 'write', 'delete'],
    editor: ['read', 'write'],
    viewer: ['read']
};

// Step 3: Create middleware to check permissions
function checkPermission(action) {
    return (req, res, next) => {    
        const username = req.headers['username'];
        if (!username || !users[username]) {
            return res.status(401).send('Unauthorized: User not found'); //Standardized unauthorized response
        }
        const userRole = users[username].role;
        const permissions = rolesPermissions[userRole] || [];
        if (!permissions.includes(action)) {
            return res.status(403).send('Forbidden: You do not have permission to perform this action');
        }// User has permission
        next();
    };      
}   
// Step 4: Define routes with role-based access control
app.get('/read', checkPermission('read'), (req, res) => {
    res.send('This is a read operation');
});

app.post('/write', checkPermission('write'), (req, res) => {
    res.send('This is a write operation');
});
app.delete('/delete', checkPermission('delete'), (req, res) => {
    res.send('This is a delete operation');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// testing above code use curl or postman to test different users and their permissions
// Example curl commands on powershell ]:
// curl -H "username : alice" http://localhost:3000/read
// curl -H "username : bob" -X POST http://localhost:3000/write
// curl -H "username : charlie" -X DELETE http://localhost:3000/delete

