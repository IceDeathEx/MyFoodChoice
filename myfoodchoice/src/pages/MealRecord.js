import React from 'react';
import { useState } from 'react';
import { NavBarUser } from './NavBarUser';

const MealRecord = () => {
        const [toggle, setToggle] = useState(false)
        const [toggle2, setToggle2] = useState(true)
    function mealhistory(){
        setToggle(true);
        setToggle2(false);
    }
    function mealhistory2(){
        setToggle(false);
        setToggle2(true);
    }
    return (
        <div>
            <NavBarUser/>
            <div className="divcss">
                <h2>Meal Record page</h2>
                <form>
                    <label>Choose User Profile</label><br></br>
                    <input type="checkbox" id="User Profile 1" name="User Profile 1" value="User Profile 1"></input>
                    <label>User Profile 1</label>
                    <input type="checkbox" id="User Profile 2" name="User Profile 2" value="User Profile 2"></input>
                    <label>User Profile 2</label>
                    <input type="checkbox" id="User Profile 3" name="User Profile 3" value="User Profile 3"></input>
                    <label>User Profile 3</label>
                    <br></br>
                    <label>Choose area</label>
                    <select>
                        <option>Select an option</option>
                        <option>1. North</option>
                        <option>2. Northeast</option>
                        <option>3. East</option>
                        <option>4. Southeast</option>
                        <option>5. South</option>
                        <option>6. Southwest</option>
                        <option>7. West</option>
                        <option>8. Northwest</option>
                        <option>9. Central</option>
                    </select>
                    <label>Choose the stall</label>
                    <select>
                        <option>Select an option</option>
                        <option>1. Tian Tian Hainanese Chicken Rice Stall</option>
                        <option>2. Encik Tan Curry Chicken Rice Stall</option>
                        <option>3. Makcik's Secret Curry Chicken Rice Stall</option>
                    </select>
                    <label>Choose food</label>
                    <select>
                        <option>Select an option</option>
                        <option>1. Ayam penyet</option>
                        <option>2. Curry chicken with rice set</option>
                        <option>3. Nasi goreng set</option>
                    </select>
                    <label>Food nutritional value</label>
                    <table>
                        <thead>
                            <tr>
                                <th>Nutrient</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Fat</td>
                                <td>100g</td>
                            </tr>
                            <tr>
                                <td>Saturated Fat</td>
                                <td>90g</td>
                            </tr>
                            <tr>
                                <td>Cholesterol</td>
                                <td>100mg</td>
                            </tr>
                            <tr>
                                <td>Sodium</td>
                                <td>142mg</td>
                            </tr>
                            <tr>
                                <td>Total Carbohydrate</td>
                                <td>300g</td>
                            </tr>
                            <tr>
                                <td>Dietary Fibre</td>
                                <td>5g</td>
                            </tr>
                            <tr>
                                <td>Sugar</td>
                                <td>15g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>100g</td>
                            </tr>
                            <tr>
                                <td>Total calories</td>
                                <td>1000 Kcal</td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Create a meal</button><br></br>
                    {toggle2 && <button onClick={mealhistory}>View meal history</button>}
                    {toggle && <button onClick={mealhistory2}>Hide meal history</button>}
                    {toggle && <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Profile</th>
                                <th>Food ID</th>
                                <th>Food taken</th>
                                <th>Calories taken</th>
                                <th>Datetime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>2</td>
                                <td>Ayam Penyet</td>
                                <td>1000</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>Ayam Penyet</td>
                                <td>1000</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td>2</td>
                                <td>Ayam Penyet</td>
                                <td>1000</td>
                                <td>9 Sep 2023 15:00 GMT+8</td>
                            </tr>
                        </tbody>
                    </table>}

                </form>    
            </div>     
        </div>
    );
};

export default MealRecord;