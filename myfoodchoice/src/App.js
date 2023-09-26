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
//import { AuthProvider } from './Utility/Auth'
//import { RequireAuth } from './Utility/ReqAuth'
import TakePhoto from './pages/TakePhoto'
import MainScript from './MLtesting/Mainscript'
import { RequireAuth } from 'react-auth-kit'

const App = () => {

  return (
          //<AuthProvider>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              
                    <Route path="/homepage" element={<RequireAuth loginPath={'/login'}><Homepage /></RequireAuth>}/>
                    <Route path="/mealrecord" element={<RequireAuth loginPath={'/login'}><MealRecord /></RequireAuth>}/>
                    <Route path="/healthtips" element={<RequireAuth loginPath={'/login'}><HealthTips /></RequireAuth>}/>
                    <Route path="/recipe" element={<RequireAuth loginPath={'/login'}><Recipe /></RequireAuth>}/>
                    <Route path="/account" element={<RequireAuth loginPath={'/login'}><Account /></RequireAuth>}/>
                    <Route path="/transaction" element={<RequireAuth loginPath={'/login'}><Transaction /></RequireAuth>}/>
                    <Route path="/feedback" element={<RequireAuth loginPath={'/login'}><Feedback /></RequireAuth>}/>
                    <Route path="/loyalty" element={<RequireAuth loginPath={'/login'}><Loyalty /></RequireAuth>}/>
                    <Route path="/orderfood" element={<RequireAuth loginPath={'/login'}><Partnership /></RequireAuth>}/>

              <Route path="*" element={<NotFound />}/>
            </Routes>
          //</AuthProvider>
  )}
export default App;