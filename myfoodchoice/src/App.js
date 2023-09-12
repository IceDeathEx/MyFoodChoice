import React from 'react'
import './App.css'
import { Link, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage.js'
import CreatePost from './pages/CreatePost.js'
import UpdatePost from './pages/UpdatePost.js'
import Read from './pages/Read.js'
import Homepage from './pages/Homepage'
import Loyalty from './pages/Loyalty'
import Feedback from './pages/Feedback'
import Transaction from './pages/Transaction'
import Account from './pages/Account'
import Recipe from './pages/Recipe'
import HealthTips from './pages/HealthTips'
import MealRecord from './pages/MealRecord'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div>
      <div>
          <div className="links"> 
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/updatepost/:id" element={<UpdatePost />} />
              <Route path="/readpost/:id" element={<Read />} />
              
                    <Route path="/homepage" element={<Homepage />}/>
                    <Route path="/mealrecord" element={<MealRecord />}></Route>
                    <Route path="/healthtips" element={<HealthTips />}></Route>
                    <Route path="/recipe" element={<Recipe />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/transaction" element={<Transaction />}></Route>
                    <Route path="/feedback" element={<Feedback />}></Route>
                    <Route path="/loyalty" element={<Loyalty />}></Route>
            </Routes>
          </div>
        </div>  
      </div>
  )}
export default App;