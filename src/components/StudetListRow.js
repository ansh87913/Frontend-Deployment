import Axios from "axios";
import { Link } from "react-router-dom";

export function StudentListRow(props){
    //To delete a record -> Getting id by clicking delete button and using this url to delete at the url which is connnected with ExpressJS(backend)
    const handleClick = ()=>{
        Axios.delete("https://crud-deployment-dqzl.onrender.com/students/delete-student/"+props.obj._id)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.rollno}</td>
            <td>
                <button class="btn btn-success mx-4">
                    <Link to={"/edit-student/"+props.obj._id} class="text-decoration-none text-light">Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger mx-4">Delete</button>
            </td>
        </tr>
    )
}