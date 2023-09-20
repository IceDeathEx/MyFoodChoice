import React, {useState} from 'react';
import Navbar from './Navbar';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner'
import SnacksAndOthers from './SnacksAndOthers';
import Exercises from './Exercises';
const Recipe = () => {
        const [showbf, setShowBf] = useState(false);
        const [hidebf, setHideBf] = useState(true);
        const [showLunch, setShowLunch] = useState(false);
        const [hideLunch, setHideLunch] = useState(true);
        const [showDinner, setShowDinner] = useState(false);
        const [hideDinner, setHideDinner] = useState(true);
        const [showSnacks, setShowSnacks] = useState(false);
        const [hideSnacks, setHideSnacks] = useState(true);
        const [showExercise, setShowExercise] = useState(false);
        const [hideExercise, setHideExercise] = useState(true);
        function ShowMyBreakfast(){
            setShowBf(true)
            setHideBf(false)
        }
        function HideMyBreakfast(){
            setShowBf(false)
            setHideBf(true)
        }
        function ShowMyLunch(){
            setShowLunch(true)
            setHideLunch(false)
        }
        function HideMyLunch(){
            setShowLunch(false)
            setHideLunch(true)
        }
        function ShowMyDinner(){
            setShowDinner(true)
            setHideDinner(false)
        }
        function HideMyDinner(){
            setShowDinner(false)
            setHideDinner(true)
        }
        function ShowMySnacks(){
            setShowSnacks(true)
            setHideSnacks(false)
        }
        function HideMySnacks(){
            setShowSnacks(false)
            setHideSnacks(true)
        }
        function ShowMyExercise(){
            setShowExercise(true)
            setHideExercise(false)
        }
        function HideMyExercise(){
            setShowExercise(false)
            setHideExercise(true)
        }
    return (
        <div >
            <Navbar />  
            <div className="trackcalories">
                <div className="divcss">
                    <h2>Recipe page</h2>
                </div>
                <div className="bgroup">
                
                    <h3>Breakfast</h3>
                    {hidebf &&<button onClick={ShowMyBreakfast}>show breakfast</button>}
                    {showbf &&<button onClick={HideMyBreakfast}>hide breakfast</button>}
                    {showbf && <Breakfast/>}
                    <h3>Lunch</h3>
                    {hideLunch && <button onClick={ShowMyLunch}>show Lunch</button>}
                    {showLunch && <button onClick={HideMyLunch}>hide Lunch</button>}
                    {showLunch &&<Lunch/>}
                    <h3>Dinner</h3>
                    {hideDinner && <button onClick={ShowMyDinner}>show Dinner</button>}
                    {showDinner && <button onClick={HideMyDinner}>hide Dinner</button>}
                    {showDinner && <Dinner/>}
                    <h3>Snacks / Others</h3>
                    {hideSnacks && <button onClick={ShowMySnacks}>show Snacks/ Others</button>}
                    {showSnacks && <button onClick={HideMySnacks}>hide Snacks/ Others</button>}
                    {showSnacks && <SnacksAndOthers/>}
                    <h3>Exercises</h3>
                    {hideExercise && <button onClick={ShowMyExercise}>show Exercise</button>}
                    {showExercise && <button onClick={HideMyExercise}>hide Exercise</button>}
                    {showExercise && <Exercises/>}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
