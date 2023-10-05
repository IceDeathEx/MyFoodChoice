import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loyalty from './pages/Loyalty'
import Feedback from './pages/Feedback'
import Transaction from './pages/Transaction'
import Recipe from './pages/Recipe'
import HealthTips from './pages/HealthTips'
import MealRecord from './pages/MealRecord'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'
import Partnership from './pages/Partnership'
import TakePhoto from './pages/TakePhoto'
import { RequireAuth } from 'react-auth-kit'
import HealthTips1 from './pages/HealthTips1'
import AccountDetails from './pages/AccountDetails'
import AccountEdit from './pages/AccountEdit'
import TestML from './MLtesting/TestML'
const App = () => {

  return (
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/healthtips1" element={<HealthTips1/>}/>
              
              <Route path="/homepage" element={<RequireAuth loginPath={'/login'}><Homepage /></RequireAuth>}/>
              <Route path="/mealrecord" element={<RequireAuth loginPath={'/login'}><MealRecord /></RequireAuth>}/>
              <Route path="/healthtips" element={<RequireAuth loginPath={'/login'}><HealthTips /></RequireAuth>}/>
              <Route path="/recipe" element={<RequireAuth loginPath={'/login'}><Recipe /></RequireAuth>}/>
              <Route path="/account" element={<RequireAuth loginPath={'/login'}><AccountDetails /></RequireAuth>}/>
              <Route path="/editprofile" element={<RequireAuth loginPath={'/login'}><AccountEdit /></RequireAuth>}/>
              <Route path="/transaction" element={<RequireAuth loginPath={'/login'}><Transaction /></RequireAuth>}/>
              <Route path="/feedback" element={<RequireAuth loginPath={'/login'}><Feedback /></RequireAuth>}/>
              <Route path="/loyalty" element={<RequireAuth loginPath={'/login'}><Loyalty /></RequireAuth>}/>
              <Route path="/orderfood" element={<RequireAuth loginPath={'/login'}><Loyalty /></RequireAuth>}/>

              <Route path="*" element={<NotFound />}/>
            </Routes>
  )}
export default App;