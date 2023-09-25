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
import TakePhoto from './pages/TakePhoto'
import MainScript from './MLtesting/Mainscript'

const App = () => {
  return (
          <AuthProvider>
            <Routes>
              {<Route path="/" element={<MainScript />} />}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              

              <Route path="/homepage" element={<RequireAuth><Homepage /></RequireAuth>}/>
              <Route path="/mealrecord" element={<RequireAuth><MealRecord /></RequireAuth>}/>
              <Route path="/healthtips" element={<RequireAuth><HealthTips /></RequireAuth>}/>
              <Route path="/recipe" element={<RequireAuth><Recipe /></RequireAuth>}/>
              <Route path="/account" element={<RequireAuth><Account /></RequireAuth>}/>
              <Route path="/transaction" element={<RequireAuth><Transaction /></RequireAuth>}/>
              <Route path="/feedback" element={<RequireAuth><Feedback /></RequireAuth>}/>
              <Route path="/loyalty" element={<RequireAuth><Loyalty /></RequireAuth>}/>
              <Route path="/partnership" element={<RequireAuth><Partnership /></RequireAuth>}/>
              
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </AuthProvider>
  )}
export default App;