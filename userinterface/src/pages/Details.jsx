import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar'
import "./../global.css"
import {  ArrowLeftOutlined, Delete } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const Container = styled.div`
margin-top: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ContainerWrapper = styled.div`
width:80%;
min-width: 700px;
display: flex;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;align-items: center;
flex-direction: column;
gap:10px;
padding: 50px;
border-radius:5px;
position: relative;
`
const Lower = styled.div`
height:70px;
width: 100%;
background-color: #FFFFE0;
position: absolute;
bottom: -20px;
box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
`
const Upper = styled.div`
width:100%;
display: flex;
align-items: center;
gap: 20px;
`

const Name = styled.p`
font-weight: bold;
text-transform:capitalize;
`
const Items = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
width: ${props => props.less ? "80%" : "100%"};
`
const Item = styled.div`
min-width: 250px;
background-color: aliceblue;
padding: 10px 20px;
margin-bottom: 20px;
border-radius: 4px;
`
const Title = styled.h6``
const Value = styled.p``
const Info = styled.p`
padding: 10px 30px;
background-color: var(--orange);
border-radius: 40px;
color: white;
font-weight: 500;
letter-spacing: 2px;
`

const LowerPart = styled.div`
margin-top:3rem ;
width: 80%;
`
const Buttonback = styled.button`
border: 2px solid white;
background-color: var(--orange);
color: white;
padding: 5px 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 40px;
font-size: 20px;
cursor: pointer;
`

const Details = () => {
  return (
    <Container>
      <Navbar balnk={true} />
      <ContainerWrapper>
        <Upper>
          <Avatar></Avatar>
          <Name>Kunal</Name>
        </Upper>
        <Items>
          <Item>
            <Title style={{ "color": "red" }}>Ref ID</Title>
            <Value>68956313463</Value>
          </Item>
          <Item>
            <Title style={{ "color": "red" }}>Secret Code</Title>
            <Value>3463</Value>
          </Item>
          <Item>
            <Title style={{ "color": "green" }}>aadhar ID</Title>
            <Value>123893093243</Value>
          </Item>
          <Item>
            <Title>Year of Birth:</Title>
            <Value>2001</Value>
          </Item>
        </Items>
        <Items less>
          <Info>Center:Vivekananda school</Info>
          <Info>Dose1</Info>
          <Info>covaxin</Info>
          <Info>Free</Info>
        </Items>
        <Lower>
        <Stack direction="row" spacing={2} padding={2}>
      <Button variant="contained"  sx={{ backgroundColor: "#fca61f" }} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "#fca61f" }} endIcon={<SendIcon />}>
        EDIT
      </Button>
    </Stack>
        </Lower>
      </ContainerWrapper>
      <LowerPart>
        <Link to="/schedule">
          <Buttonback> <ArrowLeftOutlined />Back</Buttonback>
        </Link>
      </LowerPart>

    </Container>
  )
}

export default Details
