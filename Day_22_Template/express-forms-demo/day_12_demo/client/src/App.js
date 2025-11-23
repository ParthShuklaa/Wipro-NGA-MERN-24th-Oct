import React ,{useState , useEffect}from "react";

import CoursesForm from "./components/CoursesForm";
import CoursesList from "./components/CoursesList";

const API_URL = "http://localhost:300/courses";
function App() {

const [courses ,setCourses] =useState([]);
const[editCourse,setEditCourse] =useState(null);


// fetch all courses
useEffect (()=>{
  fetchCourses();

},[]);

const fetchCourses =()=>{
  fetch(API_URL)
  .then((res)=>res.json())
  .then((data)=>setCourses(data))
  .catch((err)=>console.error("error fetching data",err));
};


// create courses

const addCourses =(course)=>{

  fetch(API_URL,{
  method:"POST",
  headers:{"Content-Type": "application/json"},
  body:JSON.stringify(course),
  })
  .then((res)=>res.json())
  .then((newCourse)=>setCourses([...courses,newCourse]))
   .catch((err) => console.error("Error adding course:", err));
};


// update courses

const updatedCourse =(updatedCourse)=>{
  fetch(`${API_URL}/${updatedCourse.id}`,{

  method:"PUT",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(updatedCourse),
  })
  .then((res)=>res.json())
  .then((data)=>{setCourses(courses.map((course)=>(course.id === data.id ? data:course)
));
setEditCourse(null);

})
.catch((err)=>console.error("error updating courses",err));

};

const deletedCourses =(id)=>{
  fetch(`${API_URL}/${id}`,
  {  method:"DELETE",})
  .then(()=>{
    setCourses(courses.filter((course)=>course.id !==id));
    setEditCourse(null);
  })

  .catch((err)=>console.error("error deleting courses",err));
};


  return (
    <div className="App" style={{padding:"20px"}}>
    <h1>crud operation on courses</h1>
    <CoursesForm
    onAddCourse={addCourses}
    onUpdateCourse ={updatedCourse}
    onDeleteCourse={deletedCourses}
    editCourse={editCourse}
    />

    <CoursesList
     courses={courses}
        onDelete={deletedCourses}
        onEdit={setEditCourse}
        />
    </div>
  );
}

export default App;
