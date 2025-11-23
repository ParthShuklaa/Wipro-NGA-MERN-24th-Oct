// write code for all the functionalities mentioned in the assignmeent


document.addEventListener("DOMContentLoaded", function () {

    // store in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Login functionality
    let loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            // Stop form from reloading the page
            e.preventDefault();

            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;

            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("Login Successful");
                // set login status
                localStorage.setItem("loggedIn", "true");
                // store current user
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "welcome.html";
            } else {
                alert("Invalid Email or Password");
            }
        });
    }

    // Register functionality
    let registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function (e) {
            e.preventDefault();

            let name = document.getElementById("regName").value;
            let email = document.getElementById("regEmail").value;
            let password = document.getElementById("regPassword").value;
            let course = document.getElementById("regCourse").value;

            if (name === "" || email === "" || password === "" || course === "") {
                alert("Please fill all fields!");
                return;
            }

            let student = {
                name: name,
                email: email,
                password: password,
                course: course
            };

            users.push(student);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration Successful!");
            window.location.href = "login.html";
        });
    }
    
});

    // monthly activity functionality
let activities = [
    { id: 1, activity: "Create HTML structure for a webpage", subject: "HTML" },
    { id: 2, activity: "Build a form using input elements", subject: "HTML" },
    { id: 3, activity: "Apply CSS to design a webpage layout", subject: "CSS" },
    { id: 4, activity: "Create responsive design using Flexbox", subject: "CSS" },
    { id: 5, activity: "Write JavaScript functions", subject: "JavaScript" },
    { id: 6, activity: "Create a To-Do List app using DOM", subject: "JavaScript" }
];

document.addEventListener("DOMContentLoaded", function () {

    let subjectDropdown = document.getElementById("subjectDropdown");
    let activityContainer = document.getElementById("activityContainer");

    if (subjectDropdown) {
        subjectDropdown.addEventListener("change", function () {
            let selectedSubject = subjectDropdown.value;

            activityContainer.innerHTML = "";

            if (selectedSubject === "") {
                activityContainer.innerHTML = `<p class='text-danger text-center'>Please select a subject!</p>`;
                return;
            }

            let filtered = activities.filter(a => a.subject === selectedSubject);

            if (filtered.length === 0) {
                activityContainer.innerHTML = `<p class='text-warning text-center'>No activities available for this subject!</p>`;
                return;
            }

            let output = `<h4 class="text-success text-center mb-3">${selectedSubject} Activities</h4>`;
            output += `<ul class="list-group">`;

            filtered.forEach(a => {
                output += `<li class="list-group-item">${a.activity}</li>`;
            });

            output += `</ul>`;
            activityContainer.innerHTML = output;
        });
    }

});