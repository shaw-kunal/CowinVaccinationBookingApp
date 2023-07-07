import React from 'react'
import "./singleCenter.scss"
import ASideBar from '../../adminComponent/Sidebar/ASideBar'
import ANavbar from '../../adminComponent/Navbar/ANavbar'
import TitleHeader from '../../adminComponent/TitleHeader'

const SingleCenter = () => {
  return (
    <div className='home'>
      <ASideBar/>
      <div className="homeContainer">
      <ANavbar/>
      <div className='SingleCenter'></div>
      <TitleHeader title="Edit The Vaccination Center"/>
      
        <form action="" className="editContainer">
        <div className='item'>
            <label>Center Name:</label>
            <input className=''/>
        </div>


        </form>
       </div>
    </div>
  )
}

export default SingleCenter
