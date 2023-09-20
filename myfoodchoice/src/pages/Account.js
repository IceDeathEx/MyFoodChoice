import React from 'react';
import Navbar from './Navbar';

const Account = () => {
    return (
        <div>
            <Navbar/>
           
            <div className="divcss">
                <h2>Account Page</h2>
            </div>
            <div className="divcss">
                <h3>Account details</h3>
                <p className="DataInProfile2">ID</p>
                <p className="DataInProfile">1</p><br/>
                <p className="DataInProfile2">Name</p>
                <p className="DataInProfile">John Doe</p><br/>
                <p className="DataInProfile2">Email</p>
                <p className="DataInProfile">JohnDoe@gmail.com</p><br/>
                <p className="DataInProfile2">Password</p>
                <p className="DataInProfile">test</p><br/>
                <p className="DataInProfile2">Account Type</p>
                <p className="DataInProfile">1</p><br/>
                <button>Upgrade account</button>
                <button>Add user profile</button>
                <button>Change password</button>
            </div>
            <div className="divcss">
            <h3>User Profiles</h3>
                <table>
                    <thead>
                        <th>Attributes</th>
                        <th>User Profile 1 - Main</th>
                        <th>User Profile 2</th>
                        <th>User Profile 3</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>John Doe</td>
                            <td>John Doe2</td>
                            <td>John Doe3</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>26</td>
                            <td>50</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>F</td>
                            <td>F</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>165m</td>
                            <td>167m</td>
                            <td>177m</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>65 Kg</td>
                            <td>63 Kg</td>
                            <td>74 Kg</td>
                        </tr>
                        <tr>
                            <td>BMI</td>
                            <td>22.0</td>
                            <td>24.5</td>
                            <td>25.6</td>
                        </tr>
                        <tr>
                            <td>Lifestyle</td>
                            <td>Active</td>
                            <td>Sedentary</td>
                            <td>Semi-Active</td>
                        </tr>
                        <tr>    
                            <td>Health condition</td>
                            <td>None</td>
                            <td>Low blood pressure</td>
                            <td>High Cholesterol</td>
                        </tr>
                        <tr>
                            <td>Calories allowed</td>
                            <td>2000</td>
                            <td>2000</td>
                            <td>2200</td>
                        </tr>
                        <tr>
                            <td>Calories Consumed</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button>Edit Profile</button></td>
                            <td><button>Edit Profile</button><button>Delete Profile</button></td>
                            <td><button>Edit Profile</button><button>Delete Profile</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Account;