import { useState } from 'react'

import Homepage from './pages/Homepage'
import Calendar from './components/Calendar'
import MessMenu from './components/MessMenu'
import Login from './pages/Login'
import UserProfilePage from './pages/UserProfilePage'
function App() {
  return (
    <>
      <Homepage />
      <Calendar/>
      <MessMenu/>
      <Login/>
      {/* <UserProfilePage/> */}
    </>
  )
}

export default App
