import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loyalty from './pages/Loyalty'
import Feedback from './pages/Feedback'
import Transaction from './pages/Transaction'
import Account from './pages/Account'
import Recipe from './pages/Recipe'
import HealthTips from './pages/HealthTips'
import MealRecord from './pages/MealRecord'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'
import Partnership from './pages/Partnership'

const App = () => {
  return (
    <div>
      <div>
          <div className="links"> 
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              
                    <Route path="/homepage" element={<Homepage />}/>
                    <Route path="/mealrecord" element={<MealRecord />}></Route>
                    <Route path="/healthtips" element={<HealthTips />}></Route>
                    <Route path="/recipe" element={<Recipe />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/transaction" element={<Transaction />}></Route>
                    <Route path="/feedback" element={<Feedback />}></Route>
                    <Route path="/loyalty" element={<Loyalty />}></Route>
                    <Route path="/partnership" element={<Partnership />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>  
      </div>
  )}
export default App;