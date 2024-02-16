import React from 'react'
import react from '../layouts/img/react.jpg'
import {  NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <div className='flex flex-col items-center mt-16'>
    <img className='max-w-[100px] mb-3' src={react} alt="" />
    <h1 className='text-5xl font-semibold font-sans text-center mb-3'>React</h1>
    <p className='text-2xl font-semibold text-center '>The library for web and native user interfaces</p>
    <div className='mt-6'>
      <NavLink to="Learn" className='py-2 px-8  rounded-2xl border bg-blue-500 mr-5' >Learn React</NavLink>  
      <NavLink to="Refence" className='py-2 px-8 rounded-2xl border' >API React</NavLink>

    </div>
   </div>
  )
}

export default Home