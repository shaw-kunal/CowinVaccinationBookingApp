import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.h3`
`

const NotValidUser = () => {
  return (
    <Container>
    <Navbar balnk={true}/>

     <Title>
        "First Login For Register in Slot"
     </Title>
      
    </Container>
  )
}

export default NotValidUser
