import React from "react";
import CoursesItem from "./CoursesItem";


function CoursesList({onDelete , onEdit ,courses}){
    if(courses.length ===0)
        return <p>no courses available</p>

    return(
        <ul>
        {courses.map((course)=>(
            <CoursesItem
            key ={course.id}
            course ={course}
            onDelete={onDelete}
            onEdit={onEdit}
            />
        ))}

        </ul>

    );
}
export default CoursesList;