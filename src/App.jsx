import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/Pages/Home'
import Watchlist from './assets/Pages/Watchlist'
import Fail from './assets/Pages/Fail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
        <Route path='/fail' element={<Fail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
