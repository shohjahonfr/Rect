import React from 'react'
import react from '../layouts/img/react.jpg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-5  sticky top-0 bg-slate-900'>
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-5">
        <Link className='text-2xl font-bold text-yellow-300 max-w-[60px]' to="/"><img src={react} alt="" /></Link>

        <nav className='space-x-8 font-semibold'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Learn">Learn</NavLink>
          <NavLink to="/Refence">Refence</NavLink>
          <NavLink to="/Comunity">Comunity</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/components">com</NavLink>
        </nav>
      </div>
    </header>
  )
}


export default Header