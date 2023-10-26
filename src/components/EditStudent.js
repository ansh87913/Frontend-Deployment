import { useEffect, useState } from "react";
import {StudentForm} from "./StudentForm";
import Axios from "axios";
import { useParams } from "react-router-dom";

export function EditStudent(){
    const {id} = useParams(); //Getting the id from the url as path also contains the id of particular record
    const [data,setData] = useState({name:"",email:"",rollno:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
        //This Axios url contains record of a particular id and returns it in res.data
        Axios.get("https://crud-deployment-dqzl.onrender.com/students/update-student/"+id)
        .then((res)=>{
            if(res.status === 200)
            {
                const {name,email,rollno} = res.data; //name: Raj, email: .., rollno: ..
                setData({name,email,rollno});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    })

    //Getting data from StudentForm
    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = ()=>{
        const newObj = {name:newData[0], email:newData[1], rollno:newData[2]};
        Axios.put("https://crud-deployment-dqzl.onrender.com/students/update-student/"+id,newObj)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record updated successfully")
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));;
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                         nameValue={data.name}
                         emailValue={data.email}
                         rollNoValue={data.rollno}
            >
                Update Student
            </StudentForm>
        </form>
        //We are passing props to StudentForm so that we could pass the details of exisiting record so that user could use it for reference before updating
    )
}