import React from 'react'
import { NavLink } from 'react-router-dom'

const TutorialTicTacToe = () => {
  return (
    <div>
      <div className='flex'>

          <details open>
            <summary>
              <NavLink to="/Learn" className=''>Quick Start </NavLink>
            </summary>
            <div className='flex-1'>
              <NavLink to="/Boshliqlar" >Thinking in React</NavLink>
              <NavLink  to="/TutorialTicTacToe">Tutorial: Tic-Tac-Toe</NavLink>   
            </div>
          </details>
      </div>
        <div >
      <div className=''>
        <div className='w-full max-w-[770px] ml-auto'>
          <h1 className='text-4xl font-bold mb-4'>Tutorial: Tic-Tac-Toe</h1>
          <p className=' text-xl font-bold'>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.</p>
        </div>
        <div className='w-full max-w-[770px] ml-auto h-52 bg-teal-900 rounded-2xl mt-6' >
          <h1 className='text-2xl font-semibold p-6 px-8 text-teal-400'>Note</h1>
          <p className='px-6 text-lg'>This tutorial is designed for people who prefer to learn by doing and want to quickly try making something tangible. If you prefer learning each concept step by step, start with</p>
        </div>
        <div className='w-full max-w-[770px] ml-auto'>
          <span className='mt-4 inline-block'>The tutorial is divided into several sections:</span>
          <ul className='list-disc my-3'>
            <li> <NavLink to="/Learn" className='text-sky-500 '>Setup for the tutorial </NavLink> - Use different React features from your components.</li>
            <li> <NavLink to="/Learn" className='text-sky-500 '>Overview</NavLink> - Documents built-in components that you can use in your JSX.</li>
            <li> <NavLink to="/Learn" className='text-sky-500 '>Completing the game </NavLink> - APIs that are useful for defining components.</li>
            <li> <NavLink to="/Learn" className='text-sky-500 '>Adding time travel </NavLink> - Provide instructions to bundlers compatible with React Server Components.</li>
          </ul>

            <span className='text-2xl font-bold my-6 inline-block'>What are you building?</span>
            <p className='text-xl'>In this tutorial, you’ll build an interactive tic-tac-toe game with React.</p>
        
        </div>
      </div>
    </div>

    </div>
   )
}

export default TutorialTicTacToe