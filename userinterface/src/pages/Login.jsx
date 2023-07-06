import React from 'react'
import styled from 'styled-components'
import Logo from './../images/arogyasetu.jpg'
import LoginIcon from '@mui/icons-material/Login';
import { ArrowForward, LockOpen, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./../cssDesign/input.css"
import Navbar from '../component/Navbar';


const Container = styled.div`
width: 100%;
height: 100vh;
/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */

/* background-image: url('https://images.unsplash.com/photo-1496868834840-5f4c98840aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmQlMjBpbWFnZSUyMGZvciUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'); */
/* background-image: url('https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=600'); */
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
display: flex;
align-items:center;
justify-content: center;
`

const InnerContainer = styled.div`
width: 400px;
background-color: white;
height:75% ;
border-radius: 10px;
position: relative;
 
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const Upper = styled.div`
background-color:var(--orange);
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
width: 100%;
height: 35%;
display: flex;
align-items:center;
justify-content: center;
position: relative;
border-radius: 4px;

`

const LogoImg = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
position: absolute;
top:15px;

`


const Lower = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 80%;
position: absolute;
top: 120px;
left: 40px;
height: calc(100% - 120px);
background-color: white;
border-top-right-radius: 5px;
border-top-left-radius: 5px;

`
const LowerContainer = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
`
const Heading = styled.div`
display: flex;
gap:10px;
align-items: center;
justify-content: center;
`
const Title = styled.h2`
font-weight:500px;
color:var(--orange);
`

const Items = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
gap:30px;
flex-direction: column;

`
const InputItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const Input = styled.input`
padding: 8px;
padding-left:28px ;
font-size: 18px;
outline: none;
font-weight: 600;
font-family: 'Times New Roman', Times, serif;
border: none;
/* box-shadow: #1cc7d0 0px 1px 3px 0px, #1cc7d0 0px 0px 0px 1px; */

border-radius:5px;
/* box-shadow: rgba(28, 199, 208, 0.09) 0px 7px 9px 0px; */
outline: none;
border: 1.4px solid var(--orange);

`
const LoginBtn = styled.button`
padding: 5px;
width: 110px;
font-size: 22px;
border: none;
color: white;
transition: all 1s ease;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
/* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
gap:10px;
background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
transition: width 0.2s ease-in;

&:hover{
    background-image: linear-gradient(-120deg, #f6d365 0%, #fda085 100%);    width: 150px; 

}
`
const NoAccount = styled.p``

const Login = () => {
    return (
        
        <Container>
        <Navbar/>
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
       <div className="blur" style={{top:'36%',left:'-10%'}}></div>
  
            <InnerContainer>
                <Upper>
                    <LogoImg src={Logo}></LogoImg>
                </Upper>
                <Lower>
                    <LowerContainer>
                        <Heading>
                            <Title>Login Here</Title>
                            <LoginIcon className='loginArrow' />
                        </Heading>
                        <Items>
                            <InputItem >
                                <Person className='IconNamepass' />
                                <Input  className='textBox' placeholder=" " ></Input>
                                <label className='inputLabel'>UserName</label>
                            </InputItem>
                            <InputItem>
                                <LockOpen className='IconNamepass' />
                                <Input className='textBox' type='password' placeholder=' '></Input>
                                <label className='inputLabel'>Password</label>
                            </InputItem>
                            <InputItem>
                                <LoginBtn>
                                    Login
                                    <ArrowForward />
                                </LoginBtn>
                            </InputItem>
                        </Items>
                        <Link to="/register"><NoAccount>Did't have Account? Create Account</NoAccount></Link>
                    </LowerContainer>
                </Lower>
            </InnerContainer>
        </Container>
    )
}
export default Login

