import React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

function LoginPage (){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [postList,setPostList]=useState([]);
        const navigate = useNavigate()
        const [loginSuccess, setSuccess] = useState(true);
        useEffect(()=>{
            Axios.get("http://localhost:3002/api/get").then((data)=>
            {
                setPostList(data.data)
            });
        },[]) 
    
        function handleLogin(e){
            e.preventDefault()
            for(var i = 0; i< postList.length; i++){
                if(postList[i].email === username && postList[i].password === password){
                    console.log('Login successful');
                    navigate('/homepage');
                    break;
                }
                else{
                    console.log('Login failure. Please try again');
                    setSuccess(false);
                }
            }
        }
        function handleSignUp(){
            navigate('/signuppage')
        }
    return (
        <div>
            <h2>Welcome to CareCalories</h2>

            <form>
                {!loginSuccess && <p>Login credentials are wrong. Please try again.</p>}
                <label htmlFor="username">Username</label><br></br>
                <input type="test" id="username" name="username" required onChange={(e)=> setUsername(e.target.value)}></input><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password" required onChange={(e)=> setPassword(e.target.value)}></input><br></br><br></br>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignUp}>Sign up!</button>
            </form> 
        </div>
        );
}

export default LoginPage;