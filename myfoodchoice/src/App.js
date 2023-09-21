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
import { AuthProvider } from './Utility/Auth'
import { RequireAuth } from './Utility/ReqAuth'

const App = () => {
  return (
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              
              <Route path="/homepage" element={<RequireAuth><Homepage /></RequireAuth>}/>
              <Route path="/mealrecord" element={<RequireAuth><MealRecord /></RequireAuth>}></Route>
              <Route path="/healthtips" element={<RequireAuth><HealthTips /></RequireAuth>}></Route>
              <Route path="/recipe" element={<RequireAuth><Recipe /></RequireAuth>}></Route>
              <Route path="/account" element={<RequireAuth><Account /></RequireAuth>}></Route>
              <Route path="/transaction" element={<RequireAuth><Transaction /></RequireAuth>}></Route>
              <Route path="/feedback" element={<RequireAuth><Feedback /></RequireAuth>}></Route>
              <Route path="/loyalty" element={<RequireAuth><Loyalty /></RequireAuth>}></Route>
              <Route path="/partnership" element={<RequireAuth><Partnership /></RequireAuth>}></Route>
              
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </AuthProvider>
  )}
export default App;