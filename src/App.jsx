import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


// pages
import Home from './pages/Home'
import Comunity from './pages/Comunity'
import Blog from './pages/Blog'
import Learn from './pages/Learn'
import Refence from './pages/Refence'
import PageNotFound from './pages/PageNotFound'
import MainLayout from './layouts/MainLayout'
import SenMessage from './pages/SenMessage'
import HodimlarLayout from './layouts/HodimlarLayout'
import Boshliqlar from './pages/Boshliqlar'
import Ishchilar from './pages/Ishchilar'
import TutorialTicTacToe from './pages/TutorialTicTacToe'
import Hooks from './pages/Hooks'
import Components from './pages/Components'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='hodimlar' element={<HodimlarLayout/>}>
          <Route index element={<Boshliqlar/>}/>
          <Route  path='ishchilar' element={<Ishchilar/>}/>
          </Route>
          <Route  path='boshliqlar' element={<Boshliqlar/>}/>
          <Route  path='TutorialTicTacToe' element={<TutorialTicTacToe/>}/>
          <Route  path='Hooks' element={<Hooks/>}/>
          <Route  path='Components'element={<Components/>}/>
          <Route path='/Comunity' element={<Comunity/>}/>
          <Route path='/Refence' element={<Refence/>} />
          <Route path='/send-message' element={<SenMessage/>}/>
          <Route path='/Blog'element={<Blog/>}/>
          <Route path='/Learn' element={<Learn/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )
  


  return (
    <RouterProvider router={router} />
  )
}

export default App