import React, { Children } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function Layouts() {
  const location = useLocation();
  return (
    <div className="">
      <nav className={`fixed top-0 start-0 end-0 z-50 bg-white ${location.pathname === "/userProfile/mainPage" || location.pathname === "/userProfile/message" || location.pathname === "/userProfile/order" || location.pathname === "/userProfile/location" || location.pathname === "/userProfile/profileSettings" || location.pathname === "/userProfile/helpCenter" ? "hidden" : "block"}`}>
        <Navbar />
      </nav>

      <div className="min-h-dvh">
        <Outlet />
      </div>

      <footer><Footer/></footer>
    </div>
  )
}
