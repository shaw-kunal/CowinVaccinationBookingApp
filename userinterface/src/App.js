import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home';
import Login from './pages/Login';
import "./App.css"
import Details from './pages/Details';
import Schedule from './component/Schedule';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './AdminPages/AdminHome';
import SingleCenter from './AdminPages/SingleCenter/SingleCenter';


const App = () => {
  const user = false;
  return (

    <BrowserRouter>
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/Details' element={<Details/>} />
        <Route path='/schedule' element={<Schedule/>} />
       {/* admin page */}
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path="/home" element ={<AdminHome/>}/>
        <Route path="/center/:id" element ={<SingleCenter/>}/>
        
      </Routes>
    </BrowserRouter>


  )
}

export default App
