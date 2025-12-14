import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className='min-h-dvh bg-backGroundColor flex flex-row'>
        <SideBar/>
        <div className="w-full">
        <Outlet/>
        </div>
    </div>
  )
}
