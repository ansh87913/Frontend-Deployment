import { useState } from "react";
import { StudentForm } from "./StudentForm";
import Axios  from "axios"

export function CreateStudent()
{
    const [arr,setArr] = useState([]);

    const handleSubmit = (event) => {
        alert("Creating a record");
        event.preventDefault(); //prevents refreshing page
        //Axios.post("url", data) -> To post a record taken from client side through express on specified url onto server 
        //data arg needs to be an object and the data should match only Schema's columns

        /*We are using Axios to post the client data to a specific url which is connected with NodeJS or EXpress(Backend) which will 
        post data on server-side i.e. in mongoDB database*/
        const data = {name:arr[0], email:arr[1], rollno:arr[2]};
        //using server deployment link created on render.com
        Axios.post("https://crud-deployment-dqzl.onrender.com/students/create-student", data)
        .then((res)=>{
            if(res.status===200)
                alert("Record added");
            else  
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    const getState = (out)=>{
        setArr(out);
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}>
                Create Student
            </StudentForm>
        </form>
        //passing getstate as props for StudentForm
    )
}