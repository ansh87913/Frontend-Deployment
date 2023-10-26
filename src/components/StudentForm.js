import { useEffect, useState } from "react";

//To get props inside function we use it this way (different than class)
export function StudentForm(props){
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollno, setRollNo] = useState(props.rollNoValue);
    
    //useEffect acts as life cycle compoennt for a function component
    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue, props.rollNoValue]);

    const arr = [name,email,rollno];

    const handleClick = ()=>{
        props.getState(arr); //getstate is a function and not returning any value here
    }

    return (
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>{setName(event.target.value)}} class="form-control my-3" placeholder="Enter your name"></input>
            <input defaultValue={props.emailValue} onChange={(event)=>{setEmail(event.target.value)}} class="form-control my-3" placeholder="Enter your email"></input>
            <input defaultValue={props.rollNoValue} onChange={(event)=>{setRollNo(event.target.value)}} class="form-control my-3" placeholder="Enter your rollNo"></input>
            <button onClick={handleClick} class="btn btn-success my-3" type="submit">{props.children}</button>
        </div>
    )
}

//Client is running at port 3000 and server is running on port 4000