import React from 'react'
import { NavLink } from 'react-router-dom'

const Boshliqlar = () => {
  return (
    <div >
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
          <h1 className='text-4xl font-bold mb-4'>Thinking in React</h1>
          <p className=' text-xl font-bold'>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</p>
          <span className='text-3xl font-bold mt-6 inline-block'>Start with the mockup</span>
          <p className='text-lg mt-6'>Imagine that you already have a JSON API and a mockup from a designer.</p>
        </div>
      </div>
    </div>

  )
}

export default Boshliqlar