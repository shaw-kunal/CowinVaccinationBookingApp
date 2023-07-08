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
import { useSelector } from 'react-redux';
import NotValidUser from './component/NotValidUser';
import AddCenter from './AdminPages/AddCenter';



const App = () => {
  const person = useSelector(state=>state.user.currentUser)
  console.log(person);
  let admin = false;
  let user =false;
  if(person != null && person.isAdmin)
  {
    alert("login as Admin")
    console.log(person.isAdmin)
    admin = true;
  }
  else if(person != null)
  {
    alert("login as User")
    user = true;
  }
    
  return (

    <BrowserRouter>
      <Routes >
        <Route exact path='/' element={user ? <Home/>:<NotValidUser/>} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/Details' element={<Details/>} />
        <Route path='/schedule' element={<Schedule/>} />
       {/* admin page */}
        <Route path='/admin' element={admin ?<AdminHome/>:<AdminLogin/>} />
        <Route path="/home" element ={  <AdminHome/>}/>
        <Route path="/addCenter" element ={  <AddCenter/>}/>
        <Route path="/center/:id" element ={<SingleCenter/>}/>
        
      </Routes>
    </BrowserRouter>


  )
}

export default App
