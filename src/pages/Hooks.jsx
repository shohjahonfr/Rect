import React from 'react'
import { NavLink } from 'react-router-dom'

const Hooks = () => {
    return (
        <div>

            <div>

                <details open>
                    <summary>
                        <NavLink to="/Refence">Refence</NavLink>
                    </summary>
                    <ul className='flex'>
                        <NavLink to="/Hooks">Hooks</NavLink>
                        <NavLink to="/components">com</NavLink>
                    </ul>
                </details>
            </div>

            <div className='w-full max-w-[770px] ml-auto'>
                <h1 className='text-4xl font-bold mb-4'>Built-in React Hooks</h1>
                <p className=' text-xl font-bold'>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
                <div>
                    <span className='text-2xl font-bold mt-10 inline-block mb-4'>State Hooks </span>
                    <p className='text-lg font-bold'>State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Hooks