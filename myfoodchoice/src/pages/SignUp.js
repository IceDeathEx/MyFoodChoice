import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [accounttype, setAccountType] = useState('1');
  const [accounttype2, setAccountType2] = useState('');
  const [emailExists, setEmailExists] = useState(false); // State to track if email exists
  const navigate = useNavigate();

  // Function to check if email exists in the database
  const checkEmailExists = async () => {
    try {
      const response = await Axios.post('http://localhost:3002/api/check-email-exists', {
        email: email,
      });

      // If the response indicates that the email exists
      if (response.data.emailExists) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
        // If the email doesn't exist, proceed with registration
        submitPost();
      }
    } catch (error) {
      console.error('Error checking email existence:', error);
      // Handle the error appropriately
    }
  };

  // Function to submit user registration data
  const submitPost = () => {
    Axios.post('http://localhost:3002/api/signup', {
      email: email,
      name: name,
      password: password,
      gender: gender,
      accounttype: accounttype,
    });
    navigate('/');
  };

  return (
    <div className="SignUp">
      <div className="uploadAcc">
        <div>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailExists && <p>Email already exists. Please use a different email.</p>}
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Gender: </label>
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div>
          <label>Account Type: </label>
          <select
            value={accounttype2}
            onChange={(e) => {
              setAccountType2(e.target.value);
            }}
          >
            <option value="">Select Account Type</option>
            <option value="User">User</option>
            <option value="System Admin">System Admin</option>
            <option value="Product Owner">Product Owner</option>
          </select>
        </div>
        <button onClick={checkEmailExists}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
