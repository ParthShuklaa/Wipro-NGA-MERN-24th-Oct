import { useEffect ,useState } from "react";

//  create function accept props
function CoursesForm({onAddCourse , onUpdateCourse , editCourse,onDeleteCourse}){
    const [title , setTitle] =useState("");
    const [level , setLevel] =useState("");
    const [duration,setDuration] =useState("");


    useEffect(()=>{
        if(editCourse){
            setTitle(editCourse.title);
           setLevel(editCourse.level);
            setDuration(editCourse.duration);
        }
    },[editCourse]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!title || !level || !duration)
            return alert("pls fiels all fields");
        const courseData ={
            ...editCourse,
            title,
            level,
            duration:Number(duration)

        };
        if(editCourse){
            onUpdateCourse(courseData);
        }else   {
            onAddCourse(courseData);
        }
        setTitle("");
        setLevel("");
        setDuration("");
    };
    const handleDelete =()=>{
        if(editCourse && editCourse.id){
            onDeleteCourse(editCourse.id);
             setTitle("");
        setLevel("");
        setDuration("");
        }
    };
    return(
        <form onSubmit={handleSubmit}  style={{marginBottom:"20px"}}>
        <input type="text" value={title} placeholder="title"  onChange={(e)=>setTitle(e.target.value)}/>
        <select value={level} placeholder="level" onChange={(e)=>setLevel(e.target.value)}>
        <option value="beginner">beginner</option>
         <option value="easy">easy</option>
          <option value="hard">hard</option>
        </select>
<input type="number" value={duration} placeholder="duration " onChange={(e)=>setDuration(e.target.value)}/>

<button type="submit" >{editCourse ? "update course" : "add course"}</button>
{editCourse &&(
    <button type="button" onClick={handleDelete} style={{marginLeft:"10px"}}>delete</button>
)}
        </form>

    );


}
export default CoursesForm;