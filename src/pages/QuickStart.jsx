import React from 'react'
import { NavLink } from 'react-router-dom'
const QuickStart = () => {
  return (
<div className='flex'>
      <div>
    
      <details open>
            <summary>
            <NavLink to="/Learn" className=''>Quick Start </NavLink>
            </summary>
            <ul className='flex'>
            <NavLink to="/Boshliqlar">Thinking in React</NavLink>
            <NavLink  to="/TutorialTicTacToe">Tutorial: Tic-Tac-Toe</NavLink>   
                   </ul>
          </details>
      </div>
      <div className='w-full max-w-[770px] ml-auto'>
        <h1 className='text-4xl font-bold mb-4'>Quick Start</h1>
        <p className=' text-xl font-samibold'>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
      <div className=' max-h-70 bg-slate-700 rounded-2xl mt-6'>
        <div className='p-6 px-8'>

          
          <h2 className='text-xl font-semibold mb-5'>You will learn</h2>
          <ul className='list-disc'>
            <li className='ml-3 mb-1 text-gray-200 '>How to create and nest components</li>
            <li className='ml-3 mb-1 text-gray-200 '>How to add markup and styles</li>
            <li className='ml-3 mb-1 text-gray-200 '>How to display data</li>
            <li className='ml-3 mb-1 text-gray-200 '>How to render conditions and lists</li>
            <li className='ml-3 mb-1 text-gray-200 '>How to respond to events and update the screen</li>
            <li className='ml-3 mb-1 text-gray-200 '>How to share data between components</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold mb-6 mt-6'>Creating and nesting components </h2>
        <p className='font-medium text-xl'>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
      </div>
    </div>
      </div>
    )
}

export default QuickStart