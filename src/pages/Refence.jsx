import React from 'react'
import { NavLink } from 'react-router-dom'

const Refence = () => {
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
      <div className='w-full max-w-[730px] ml-auto'>
        <h1 className='text-4xl font-bold '>React Reference Overview</h1>
        <p className='text-xl mt-4 '>This section provides detailed reference documentation for working with React.
          For an introduction to React, please visit the <NavLink to="/Learn" className='text-green-500'>Learn</NavLink> section.
        </p>
        <p className='text-lg mt-4 '>
          Our The React reference documentation is broken down into functional subsections:
        </p>
        <h3 className='text-3xl font-bold mt-4'>React</h3>
        <p className='text-lg mt-5' >Programmatic React features:</p>

        <div>
          <ul className='list-disc'>
            <li> <NavLink to="/Hooks" className='text-sky-500'>Hooks </NavLink> - Use different React features from your components.</li>
            <li> <NavLink to="/Learn" className='text-sky-500'>Components </NavLink> - Documents built-in components that you can use in your JSX.</li>
            <li> <NavLink to="/Learn" className='text-sky-500'>APIs </NavLink> - APIs that are useful for defining components.</li>
            <li> <NavLink to="/Learn" className='text-sky-500'>Directives </NavLink> - Provide instructions to bundlers compatible with React Server Components.</li>
          </ul>
        </div>
        <h3 className='text-3xl font-bold mt-4'>React DOM</h3>
        <p className='mt-5'>React-dom contains features that are only supported for web applications
          (which run in the browser DOM environment). This section is broken into the following:</p>
          <div>
            <ul className='list-disc'>
              <li><NavLink to="/Learn" className='text-sky-500'>Hooks </NavLink> - Hooks for web applications which run in the browser DOM environment.</li>
              <li><NavLink to="/Learn" className='text-sky-500'>Components </NavLink> - React supports all of the browser built-in HTML and SVG components.</li>
              <li><NavLink to="/Learn" className='text-sky-500'>APIs  </NavLink> - The react-dom package contains methods supported only in web applications.</li>
              <li><NavLink to="/Learn" className='text-sky-500'>Client APIs </NavLink> - The react-dom/client APIs let you render React components on the client (in <br /> the browser).</li>
              <li><NavLink to="/Learn" className='text-sky-500'>Server APIs </NavLink> - The react-dom/server APIs let you render React components to HTML on the <br /> server.</li>
            </ul>
          </div>
         <div>
            <h3 className='text-3xl font-bold mt-4'>Legacy APIs </h3>
          <ul className='list-disc'>
            <li><NavLink to="/Learn" className='text-sky-500'>Legacy APIs </NavLink>- Exported from the react package, but not recommended for use in newly written code.</li>
          </ul>
         </div>
         <div className='p-20  text-center'>
          <span >Next</span>
          <p className='mt-4'>

          <NavLink to="/Comunity" className='p-2 bg-green-600 mt-4 rounded-2xl'>Comunity</NavLink>
          </p>
         </div>
      </div>
    </div>
  )
}

export default Refence