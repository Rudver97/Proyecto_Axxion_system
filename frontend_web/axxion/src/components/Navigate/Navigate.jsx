import React from 'react'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

function Navigate() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Home/>
        <div className='flex-1'>
            <div className='p-4'>{<Outlet/>}</div>
        </div>
    </div>
  )
}


export default Navigate
