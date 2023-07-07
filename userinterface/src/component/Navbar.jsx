import styled from "styled-components"
import { Link } from "react-router-dom";
import "./../global.css"
import Logo from "./../images/arogyasetu.jpg"
import {Avatar} from "@mui/material"


const Container = styled.div`
height: 70px;
background: var(--orange);
overflow: hidden;
position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Left = styled.div`
background-color: white;
padding:0px 50px 0px 20px;
border-top-right-radius: 50%;
`
const Img = styled.img`
height: 80px;
`


const Center = styled.div`
display: flex;
width: 100%;
align-items: center;
gap:15px;
margin-left: 20px;
`

const Title = styled.p`
color:white;
font-size: 25px;
font-weight: 500;


`
const Item = styled.div`
color:white;
font-size: 22px;
cursor: pointer;
transition: all .5s ease;
padding: 3px 10px;
margin:2px;

&:hover{
 background-color: white;
 color: var(--orange);
 border-radius: 4px;

}
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
margin-right: 20px;
`
const Rightitem= styled.div`
color:white;
font-size: 20px;
transition: all .5s ease;
font-weight: 600;
padding: 3px 4px;
font-family: 'Times New Roman', Times, serif;
&:hover{
 background-color: white;
 color: var(--orange);
 border-radius: 4px;

}
`


const Profile = styled.div`
cursor: pointer;
`


const Navbar = ({balnk}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={Logo} alt="logo"></Img>
        </Left>
        <Center>
          {balnk ? <><Link className="link" to="/"><Item>Home</Item></Link>
          <Link className="link" to="/about" ><Item>About</Item></Link>
          <Link className="link" to="/" ><Item>Covid-19</Item></Link>
          <Link className="link" to="/" ><Item>Contact</Item></Link>
          </> : 
          <>
            <Title>Your Covid Vaccination Application</Title>
          </>
            }
        </Center>
       { balnk && <Right>
          <Link className="link" to="/login"><Rightitem>User</Rightitem></Link>
          <Link className="link" to="/admin"><Rightitem>Admin</Rightitem></Link>
        <Profile>  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Avatar></Profile>
        </Right>
       }
      </Wrapper>
    </Container>
  )
}

export default Navbar