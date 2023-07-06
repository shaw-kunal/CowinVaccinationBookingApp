import React from 'react'
import Navbar from '../component/Navbar'
import Login from './Login'
import VaccineRegister from '../component/VaccineRegister'

const Home = () => {
  return (
    <div>
    <Navbar balnk={true}/>
    <VaccineRegister/>
    
    </div>
  )
}

export default Home
