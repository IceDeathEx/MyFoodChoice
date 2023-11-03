import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loyalty from './pages/Loyalty'
import Feedback from './pages/Feedback'
import Transaction from './pages/Transaction'
import HealthTips from './pages/HealthTips'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'
import { RequireAuth } from 'react-auth-kit'
import AccountDetails from './pages/AccountDetails'
import AccountEdit from './pages/AccountEdit'
import { MealRecords } from './pages/MealRecords'
import MealHistory from './pages/MealHistory'
import RecipeList from './pages/RecipeList'
import RecipeDetails from './pages/RecipeDetails'
import FoodOrder from './pages/FoodOrder'
import ShoppingCart from './pages/ShoppingCart'
import AboutUs from './pages/AboutUs'
import PartnershipOn from './pages/PartnershipOn'
import ReviewOn from './pages/ReviewOn'
import HomepageVendor from './pages/HomepageVendor'
import CreateRecipe from './pages/CreateRecipe'
import RecipelistVendor from './pages/RecipelistVendor'
import FoodVendor from './pages/FoodVendor'
import ManageVendor from './pages/SAManageVendor'
import TransactionSA from './pages/TransactionSA'
import './css/App.css'
const App = () => {

  return (
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/partnership" element={<PartnershipOn/>}/>
              <Route path="/review" element={<ReviewOn/>}/>

              <Route path="/homepage" element={<RequireAuth loginPath={'/login'}><Homepage /></RequireAuth>}/>
              <Route path="/mealrecord" element={<RequireAuth loginPath={'/login'}><MealRecords /></RequireAuth>}/>
              <Route path="/mealhistory" element={<RequireAuth loginPath={'/login'}><MealHistory /></RequireAuth>}/>
              <Route path="/healthtips" element={<RequireAuth loginPath={'/login'}><HealthTips /></RequireAuth>}/>
              <Route path="/recipe" element={<RequireAuth loginPath={'/login'}><RecipeList /></RequireAuth>}/>
              <Route path="/recipedetails/:id" element={<RequireAuth loginPath={'/login'}><RecipeDetails /></RequireAuth>}/>
              <Route path="/account" element={<RequireAuth loginPath={'/login'}><AccountDetails /></RequireAuth>}/>
              <Route path="/editprofile" element={<RequireAuth loginPath={'/login'}><AccountEdit /></RequireAuth>}/>
              <Route path="/transaction" element={<RequireAuth loginPath={'/login'}><Transaction /></RequireAuth>}/>
              <Route path="/feedback" element={<RequireAuth loginPath={'/login'}><Feedback /></RequireAuth>}/>
              <Route path="/loyalty" element={<RequireAuth loginPath={'/login'}><Loyalty /></RequireAuth>}/>
              <Route path="/orderfood/:category/page/:id" element={<RequireAuth loginPath={'/login'}><FoodOrder /></RequireAuth>}/>
              <Route path="/shoppingcart" element={<RequireAuth loginPath={'/login'}><ShoppingCart /></RequireAuth>}/>

              <Route path="/vendor" element={<RequireAuth loginPath={'/login'}><HomepageVendor /></RequireAuth>}/>
              <Route path="/createrecipe" element={<RequireAuth loginPath={'/login'}><CreateRecipe /></RequireAuth>}/>
              <Route path="/vendorviewrecipe" element={<RequireAuth loginPath={'/login'}><RecipelistVendor /></RequireAuth>}/>
              <Route path="/createfoodmenu" element={<RequireAuth loginPath={'/login'}><FoodVendor /></RequireAuth>}/>

              <Route path="/sysadm" element={<RequireAuth loginPath={'/login'}><ManageVendor /></RequireAuth>}/>
              <Route path="/sysadmtransaction" element={<RequireAuth loginPath={'/login'}><TransactionSA /></RequireAuth>}/>

              <Route path="*" element={<NotFound />}/>
            </Routes>
  )}
export default App;