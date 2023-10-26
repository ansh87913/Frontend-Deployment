import Axios from "axios"
import { useEffect, useState } from "react"
import { StudentListRow } from "./StudetListRow"

//Printing all data in data base
export function StudentList(){
    //using useEffect() method as functions have no lifecycle
    const [arr, setData] = useState([])

    useEffect(()=>{
        Axios.get("https://crud-deployment-dqzl.onrender.com/students")
        .then((res)=>{
            if(res.status === 200)
            {
                console.log(res.data);
                setData(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err),[]);
    })

    const ListItems = () => {
        return arr.map((val)=>{
            return <StudentListRow obj={val}/>
        })
    }

    return(
        <table class="table table-success table-striped table-bordered">
            <thead style={{backgroundColor:"forestgreen"}}>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Roll Number</th>
                <th class="text-center">Action</th>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}