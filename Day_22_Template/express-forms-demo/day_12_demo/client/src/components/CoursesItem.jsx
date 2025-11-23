import React from "react";


function CoursesItem({onDelete, onEdit ,course}){
    return(
        <li style={{margin:"8px 0"}}>
        <strong> {course.title}</strong> - {course.level} - {course.duration}
        <button onClick={()=>onEdit(course)}>edit</button>
         {course.id && (
        <button
          onClick={() => onDelete(course.id)}
          style={{ marginLeft: "10px", color: "red" }}
        >
          🗑 Delete
        </button>
      )}
        
        </li>
    )


}
export default CoursesItem;