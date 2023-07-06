import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home';
import Login from './pages/Login';
import "./App.css"
import Details from './pages/Details';


const App = () => {
  const user = false;
  return (


    <BrowserRouter>
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/Details' element={<Details/>} />
    
      </Routes>
    </BrowserRouter>


  )
}

export default App
