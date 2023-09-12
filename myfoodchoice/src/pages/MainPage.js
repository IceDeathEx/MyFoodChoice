import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';


function MainPage() {
    
    const [postList,setPostList]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3002/api/get").then((data)=>
        {
            setPostList(data.data)
        });
    },[]) 
return (
    <div>
        <LoginPage/>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Password</th>
                <th>Gender</th>
                <th>AccountType</th>
                <th>Read Operations</th>
                <th>Update Operations</th>
            </tr>
            </thead>
            <tbody>
                {postList.map((val,key)=>(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.email}</td>
                        <td>{val.name}</td>
                        <td>{val.password}</td>
                        <td>{val.gender}</td>
                        <td>{val.accountType}</td>
                        <td><Link to={`/readpost/${val.id}`}><button>Read</button></Link></td>
                        <td><Link to={`/updatepost/${val.id}`}><button>Update</button></Link></td>
                        <td><Link to="/createpost">Create Post</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )}
export default MainPage