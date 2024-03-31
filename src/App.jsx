import { useState } from 'react'

import Homepage from './pages/Homepage'
import Calendar from './components/Calendar'
import MessMenu from './components/MessMenu'
import Login from './pages/Login'
import UserProfilePage from './pages/UserProfilePage'
import NextMeal from './components/NextMeal.jsx'
import RateMess from './components/RateMess.jsx'
import Feedback from './components/Feedback.jsx'
import RaiseComplaint from './components/RaiseComplaint.jsx'
function App() {
  return (
    <>
    <NextMeal/>
    <Homepage />
      {/* <Homepage />
      <Calendar/>
    <Login/> */}
      {/* 
    <MessMenu/>
    <RateMess/>
    <Feedback/> */}
      {/* <UserProfilePage/> */}
    </>
  )
}

export default App
