import React from 'react';
import Navbar from './Navbar';

const HealthTips = () => {
    return (
        <div>
            <Navbar/>
            <div className="divcss">
                <h2>Health Tips page</h2>
                <h3>Choose Your Health Tips Preference</h3>
            </div>  

        <div>
            <h4>DIABETIC</h4>
                
           <ul>
                
                <li>
                    <a href="#" title="Buy this Diet Tips" target="">Keto Diet</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
                 <li>
                    <a href="#" title="Buy this Diet Tips" target="">Bulking</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
                 <li>
                    <a href="#" title="Buy this Diet Tips" target="">Cutting</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
        </ul>
        <h4>Golden Age</h4>
        <ul>
        
                 <li>
                    <a href="#" title="Buy this Diet Tips" target="">Vegan Diet</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
                 <li>
                    <a href="#" title="Buy this Diet Tips" target="">Halal Diet</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
                 <li>
                    <a href="#" title="Buy this Diet Tips" target="">Kosher Diet</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 </li>
            </ul>
        </div>   
        </div>
    );
};

export default HealthTips;