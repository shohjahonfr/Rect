import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HodimlarLayout = () => {
  return (
    <div>
      <h1 className='mb-10 text-5xl'>Hodimlar</h1>

      <nav className='space-x-6 nasted'>
      <NavLink to='boshliqlar'>Boshliqlar</NavLink>
      <NavLink to='ishchilar'>ishchilar</NavLink>
      </nav>

      <Outlet/>
    </div>
  )
}

export default HodimlarLayout