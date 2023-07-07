import React from 'react'
import ANavbar from '../adminComponent/Navbar/ANavbar'
import ASideBar from '../adminComponent/Sidebar/ASideBar'
import "./AdminHome.scss"
import Center from '../adminComponent/centerList/Center'
const AdminHome = () => {
  return (
    <div className='home'>
      <ASideBar/>
      <div className="homeContainer">
      <ANavbar/>
      <Center/>
        
       </div>
    </div>
  )
  
}

export default AdminHome
