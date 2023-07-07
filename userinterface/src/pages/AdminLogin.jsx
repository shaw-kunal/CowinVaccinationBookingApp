import React, { useState } from 'react'
import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';


const Container = styled.div`
 width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(-45deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(2, 168, 226, 1) 86%, rgba(0, 212, 255, 1) 100%);
`
const ContainerWrapper = styled.div`
        width: fit-content;
        height: 400px;
        padding: 20px 40px;
        border-radius: 10px;
        background-color: white;

        color: rgb(79, 77, 77);
`
const Title = styled.div`
            font-size: 25px;
            font-weight: 700;
            background: -webkit-linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-left: 5px;`

const Item = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 20px;
 gap: 8px;`


const Label = styled.label`
 font-size: 18px;
 font-weight: 600;
background: -webkit-linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-left: 5px;


`
const Input = styled.input`
width: 200px;
padding: 5px;
font-size: 18px;
font-weight: 600;
outline: none;
border: none;
color: black;
border-bottom: 2px solid rgb(215, 207, 207);
`
const Button = styled.button`
 margin: 20px;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 5px;
            border: none;
            color: white;
            // background-color: ;
            // background: linear-gradient(90deg, rgb(63, 63, 223) 35%, rgba(2, 168, 226, 1) 86%, rgba(0, 212, 255, 1) 100%);
            background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
      `
      
const Error = styled.span`
color: red;
`


const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password })
    }

    return (
        <Container>
            <ContainerWrapper>
                <Title>Login To Your Account</Title>
                <Item>
                    <Label><PersonIcon style={{ "color": "#00d4ff", "marginRight": "10px" }}></PersonIcon>UserName</Label>
                    <Input type="text"
                        placeholder='userName'
                        onChange={e => setUsername(e.target.value)} ></Input>
                </Item>
                <Item>
                    <Label><LockIcon style={{ "color": "#00d4ff", "marginRight": "10px" }} />Password</Label>
                    <Input type="password"
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}></Input>
                </Item>
                <Button onClick={handleClick}>Login</Button>
                {
                                    error && <Error>Something went wrong</Error>
                                }
            </ContainerWrapper>

        </Container>
    )
}

export default AdminLogin
