const userList= document.getElementById('userList');
const btnGetUsers  =document.getElementById('getUsers');
 const btnCreateUser  = document.getElementById('createUser');


 const apiurl='https://jsonplaceholder.typicode.com/users';

//  fetch users and display GET request

  async function fetchUsers(){
    try{
        const response = await fetch(apiurl);
        if(!response.ok){
            throw new Error ('Network response was not ok');
        }   
        const users =await response.json();
        displayUsers(users);
    }catch(error){
        console.error('There has been a problem with your fetch operation:', error);
    }

    }
//  display users in the list
function displayUsers(users){
    userList.innerHTML="";
    users.forEach(user =>{
        const userItem =document.createElement('div');
        userItem.className="user-item"; 
        userItem.innerHTML=`<h3> ${user.name}</h3>
        <p>Email: ${user.email}</p>
        <button onclick="editUser(${user.id})">Edit </button>
        <button onclick="deleteUser(${user.id})">Delete </button>
        `;
        userList.appendChild(userItem);

    
    });
}


// add user  post request
 async function addUser(){
    const userData={
        name: 'New User',
        email:'vishu@gmail.com'
    };
    try{
        const response =await fetch(apiurl,{
            method:'post',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userData)
            
        });
        if(!response.ok){
            throw new Error ('Network response was not ok');
        }
        const newuser =await response.json();
        displayUsers([newuser]);

    }
    catch(error){
        console.error('There has been a problem with your fetch operation:', error);
    }
 }

//  edit user put request
async function editUser(userId){
    const updatedData={
        name:'Updated User',
        email:'update@rmail.com'
    };
    try{
        const response =await fetch (`${apiurl}/${userId}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedData)
        });
        if(!response.ok){
            throw new Error ('Network response was not ok');
        }
        const updatedUser =await response.json();
        console.log('User updated:', updatedUser);
        fetchUsers();
    }
    catch(error){
        console.error('There has been a problem with your fetch operation:', error);
    }
            }

    //  delete user delete request
    async function deleteUser(userId){
        try{
            const response =await fetch (`${apiurl}/${userId}`,{
                method:'DELETE'
            });
            if (!response.ok){
                throw new Error ('Network response was not ok');
            }   
            console.log ('User deleted:', userId);
            fetchUsers();
        }   
        catch(error){
            console.error('There has been a problem with your fetch operation:', error);
        
    }
}

// event listeners
btnGetUsers.addEventListener('click', fetchUsers);
btnCreateUser.addEventListener('click', addUser);

