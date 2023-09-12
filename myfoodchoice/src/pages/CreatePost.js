import React,{useState} from 'react';
import Axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router';

function CreatePost() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [accounttype, setaccounttype] = useState("");
    const navigate = useNavigate();

const submitPost = () => {
    Axios.post('http://localhost:3002/api/create', {email: email, name: name, password: password, gender: gender, accounttype: accounttype})
    navigate('/');
}

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>Email: </label>
                <input type="text" onChange={(e)=> {setEmail(e.target.value)}}/><br/>
                <label>Name: </label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br/>
                <label>Password: </label>
                <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <label>Gender: </label>
                <input type="text" onChange={(e)=>{setGender(e.target.value)}}/><br/>
                <label>Account Type: </label>
                <input type="text" onChange={(e)=>{setaccounttype(e.target.value)}}/><br/>
                <button onClick={submitPost}>Create account</button>
         </div>
        </div>
    )}

export default CreatePost