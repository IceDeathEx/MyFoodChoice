import { useState, useEffect } from "react";
import Axios from "axios";

function Crud(){
    const [postList,setPostList]=useState([]);

    useEffect(()=>{
    Axios.get("http://localhost:3002/api/get").then((data)=>{
    setPostList(data.data)
    });
    },[]) 
    return(
        <div>
            <table>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>AccountType</th>
                </tr>
                {postList.map((val,key)=>(
                    <tr>
                        <td>{val.email}</td>
                        <td>{val.name}</td>
                        <td>{val.password}</td>
                        <td>{val.gender}</td>
                        <td>{val.accountType}</td>
                    </tr>
                ))}
                </table>
        </div>
    )

}

export default Crud;