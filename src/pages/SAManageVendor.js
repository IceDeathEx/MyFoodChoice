import React, { useState, useEffect } from "react";
import "../css/ManageVendor.css";
import glass from "../pics/vector3.png";
import NavbarSa from "./NavbarSA";
import CareCalories from "../server/config/CareCalories";
import { useNavigate } from "react-router";
import dateFormat from "dateformat";
const ManageVendor = () => {
    const [toggle, setToggle] = useState(true)
    const [vendor, setvendor] = useState([])
    const [vendor2, setvendor2] = useState([])
    const [newPW, setNewPW] = useState('')
    const [newPW2, setNewPW2] = useState('')
    const [searchV, setsearchV] = useState(false)
    const [searchU, setsearchU] = useState(false)
    const [user, setuser]= useState([])
    const [user2, setuser2]= useState([])
    const navigate = useNavigate()
    const [test, settest]= useState('')
    const [test2, settest2]= useState('')
    useEffect(()=>{
        //testing
        CareCalories.get("/api/getvendor2", { responseType: 'blob' })
        .then((res)=>{
            settest(URL.createObjectURL(res.data));
            console.log(res.data)
            settest2(res.data)
        })
        CareCalories.get("/api/getvendors")
        .then((res)=>{
            setvendor(res.data)
        })
        CareCalories.get("/api/get")
        .then((res)=>{
            setuser(res.data)
        })
    },[])
    const handleChangePW = (e) =>{
        //console.log(e.target.value)
        if(newPW.length === 0){
            alert('Password is empty')
        }
        else{
            CareCalories.put(`/api/updatevendor/${e.target.value}`,{
                password: newPW
            })
            alert('Password successfully updated.')
            window.location.reload()
        }
    }
    const handleSearchvendor = (e) =>{
        //console.log(e.target.value)
        if(e.target.value.length === 0){
            setsearchV(false)
        }
        else{
            setsearchV(true)
            setvendor2(vendor.filter((itemname)=> itemname.vendorname.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }
    const findUser = (e) =>{
        if(e.target.value.length === 0){
            setsearchU(false)
        }
        else{
            setsearchU(true)
            setuser2(user.filter((U)=> U.email.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }
    const handleChangePW2 = (e) => {
        //console.log(newPW2)
        //console.log(e.target.value)
        if(newPW2.length === 0){
            alert('Password is empty.')
        }
        else{
            CareCalories.put(`/api/updatepassword/${e.target.value}`,{
                password: newPW2
            })
            alert('Password successfully updated.')
            window.location.reload()
        }
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageURL, setImageURL] = useState('')
    const handleUpload = (e) => {
        const { files } = e.target
        setSelectedFile(e.target.files[0])
        
        if(files.length > 0){
            const url = URL.createObjectURL(files[0])
            console.log(url)
            setImageURL(url)
        }
        else{
            setImageURL(null)
        }
    }
    const [specialty, setspecialty] = useState('Bar and Grill')
    const handleSpecialty = (e) => {
        setspecialty(e.target.value)
    }
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pw, setpw] = useState('')
    const [addr, setaddr] = useState('')

    const [imageCheck, setimageCheck] = useState(false)
    const [nameCheck, setNameCheck] = useState(false)
    const [emailCheck, setEmailCheck] = useState(false)
    const [pwCheck, setpwCheck] = useState(false)
    const [addrCheck, setaddrCheck] = useState(false)

    const handleVendorCreation = async() =>{
        // Do the appriopriate checks for
        //image //store the url to see if it works.
        const formData = new FormData();
        
        if(imageURL.length === 0){
            alert('Please upload an image.')
            setimageCheck(false)
        }
        else{
            setimageCheck(true)
        }

        if(name.length === 0){
            alert('Please enter a vendor name')
            setNameCheck(false)
        }
        else{
            setNameCheck(true)
        }
        if(pw){
            if(validatePassword(pw)){
                setpwCheck(true)
            }
            else{
                alert("Password is invalid. Password requires one uppercase letter, one lowercase letter, least one digit, at least one special character, no whitespace is allowed, a password length between 8 and 16 characters.");
            }
        }
        else{
            setpwCheck(false)
            alert('Please enter a password.')
        }
        if(email){
            for (var i = 0; i < email.length; i++){
                if(email[i] === '@'){
                  setEmailCheck(true)
                  break
                }
                else{
                  setEmailCheck(false)
                  
                }
            }
            if(!emailCheck){
                alert('Email is without an "@" symbol.')
            }
        }
        else{
            alert('Please enter an email')
            setEmailCheck(false)
        }
        
        if(addr){
            setaddrCheck(true)
        }
        else{
            setaddrCheck(false)
            alert('Please enter an address.')
        }
        console.log(imageCheck, emailCheck, addrCheck, pwCheck, nameCheck)
        if(imageCheck && emailCheck && addrCheck && pwCheck && nameCheck){
            CareCalories.post('/api/insertvendor',{
                vendorname: name,
                vendoremail: email,
                vendorpassword: pw,
                vendorimg: imageURL,
                vendoraddress: addr,
                vendorspecialty: specialty
            })
            formData.append('image', selectedFile);
            formData.append('vendoremail', email);
            formData.append('vendorname', name);
            formData.append('vendorpassword', pw);
            formData.append('vendoraddress', addr);
            formData.append('vendorspecialty', specialty);

            await CareCalories.post('/api/insertvendor2', formData)
            
            CareCalories.post('/api/insertvendortouser',{
                vendorname: name,
                vendoremail: email,
                vendorpassword: pw
            })
            alert('Account successfully created.')
            window.location.reload()
        }
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$/;

        function validatePassword(password) {
        return passwordRegex.test(password);
        }
    return (
        <div>
            <NavbarSa />
            

            <div className="manage-vendor">
                <div className="div">
                    <div className="overlap"><button className="text-wrapper btn" onClick={() => setToggle(false)}>User</button></div>
                    <div className="overlap-group"><button className="text-wrapper-2 btn" onClick={() => setToggle(true)}>Vendor</button></div>

                    {toggle && <div className="vendorPage">
                        <div className="text-wrapper-3">Create Account for Vendor</div>
                        <div className="text-wrapper-4">List of Vendor</div>
                        {imageURL &&<img className="kfc" alt="Vendor's logo" src={imageURL} />}
                        <div className="frame">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="frame-4">
                                        <input className="rectangle" onChange={(e)=> setname(e.target.value)}/>
                                        <div className="text-wrapper-5">Name*</div>
                                    </div>
                                    <div className="frame-5">
                                        <input className="rectangle" onChange={(e)=> setpw(e.target.value)}/>
                                        <div className="text-wrapper-6">Password*</div>
                                    </div>
                                    <div className="frame-6">
                                        <input className="rectangle" onChange={(e)=> setaddr(e.target.value)}/>
                                        <div className="text-wrapper-7">Address</div>
                                    </div>
                                </div>
                                <div className="frame-7">
                                    <div className="frame-8">
                                        <input className="rectangle" onChange={(e)=> setemail(e.target.value)}/>
                                        <div className="text-wrapper-8">Email*</div>
                                    </div>
                                    <div className="frame-9">
                                    <div className="text-wrapper-9SA">Specialty</div>
                                        <select className="rectangle" onChange={handleSpecialty}>
                                            <option value="Bar and Grill">Bar and Grill</option>
                                            <option value="Hamburger">Hamburger</option>
                                            <option value="Japanese Cuisine">Japanese Cuisine</option>
                                            <option value="Tzi Char">Tzi Char</option>
                                            <option value="Chinese Cuisine">Chinese Cuisine</option>
                                            <option value="Muslim specialty">Muslim specialty</option>
                                            <option value="Thai cuisine">Thai cuisine</option>
                                            <option value="Indonesian cuisine">Indonesian cuisine</option>
                                            <option value="Korean cuisine">Korean cuisine</option>
                                            <option value="Eurasian cuisine">Eurasian cuisine</option>
                                            <option value="Vietnamese cuisine">Vietnamese cuisine</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className="buttonSA" onClick={handleVendorCreation}>
                                <div className="text">Create Account</div>
                            </button>
                        </div>


                        <div className="rectangle-2" >
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Vendor Name</th>
                                        <th>Email</th>
                                        <th>Current Password</th>
                                        <th>New Password:</th>
                                        <th>Address</th>
                                        <th>Vendor Specialty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!searchV && vendor.map((ven, index)=>{
                                        return <tr key={index}>
                                                    <td>{ven.idvendor}</td>
                                                    <td>{ven.vendorname}</td>
                                                    <td>{ven.vendoremail}</td>
                                                    <td>{ven.vendorpassword}</td>
                                                    <td><input onChange={(e) => setNewPW(e.target.value)} type='text' placeholder="new password"/><button value={ven.idvendor} onClick={handleChangePW}>Change</button></td>
                                                    <td>{ven.vendoraddress}</td>
                                                    <td>{ven.vendorspecialty}</td>
                                                </tr>
                                    })}
                                    {searchV && vendor2.map((ven, index)=>{
                                        return <tr key={index}>
                                                    <td>{ven.idvendor}</td>
                                                    <td>{ven.vendorname}</td>
                                                    <td>{ven.vendoremail}</td>
                                                    <td>{ven.vendorpassword}</td>
                                                    <td><input onChange={(e) => setNewPW(e.target.value)} type='text' placeholder="new password"/><button value={ven.idvendor} onClick={handleChangePW}>Change</button></td>
                                                    <td>{ven.vendoraddress}</td>
                                                    <td>{ven.vendorspecialty}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                            {test && <img src={test}/>}
                        </div>

                        <div className="frame-10SA">
                            <button className="div-wrapperSA">
                                <div className="text-2"><input type='file' placeholder="Choose an image." accept="image/*" onChange={handleUpload}/></div>
                                
                            </button>
                            <div className="text-wrapper-10"></div>
                        </div>
                        <div className="frame-11">
                            <input className="label" onChange={handleSearchvendor}/>
                            <img className="icon-magnifying" alt="Icon magnifying" src={glass} />
                        </div>
                    </div>}

                    {!toggle && <div className="user">
                        <div className="user-group">
                            <div className="user-text-wrapper">List of User Account</div>
                            <div className="user-rectangle" />
                            <div className="user-frame">
                                <input className="user-label" onChange={findUser} />
                                <img className="user-icon-magnifying" alt="Icon magnifying" src={glass} />
                                
                            </div>
                        </div>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Password</th>
                                        <th>New Password:</th>
                                        <th>Gender</th>
                                        <th>Account Type</th>
                                        <th>Country</th>
                                        <th>Height</th>
                                        <th>Weight</th>
                                        <th>BMI</th>
                                        <th>LifeStyle</th>
                                        <th>Health Conditions</th>
                                        <th>Date Of Birth</th>
                                        <th>Status</th>
                                        <th>Loyalty points</th>
                                        <th>Age</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {searchU && user2.map((user, index)=>{
                                        return <tr key={index}>
                                                    <td>{user.id}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.password}</td>
                                                    <td><input onChange={(e) => setNewPW2(e.target.value)} type='text' placeholder="new password"/><button value={user.id} onClick={handleChangePW2}>Change</button></td>
                                                    <td>{user.gender}</td>
                                                    <td>{user.accountType}</td>
                                                    <td>{user.country}</td>
                                                    <td>{user.height}</td>
                                                    <td>{user.weight}</td>
                                                    <td>{user.bmi.toFixed(2)}</td>
                                                    <td>{user.lifestyle}</td>
                                                    <td>{user.conditions}</td>
                                                    <td>{dateFormat(user.dob, "dd/mm/yyyy")}</td>
                                                    <td>{user.premium}</td>
                                                    <td>{user.loyaltypoint}</td>
                                                    <td>{user.age}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ManageVendor;



