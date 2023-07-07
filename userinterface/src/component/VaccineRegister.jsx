import { Label } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Link, useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../requestMethod'

const Container = styled.div`
margin-top: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const ContainerWrapper = styled.div`
width: 50%;
min-width: 600px;
box-shadow: rgba(252, 167, 31, 0.304) 0px 4px 16px, rgba(222, 129, 23, 0.05) 0px 8px 32px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:10px;
padding: 50px;
border-radius: 15px;
`
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h3`
color:var(--orange);
font-weight: 700;
font-size: 26px;
padding-bottom: 20px;

`
const Notice = styled.p`
font-family: 'Times New Roman', Times, serif;

`
const Form = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
gap:20px;
`


const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

`
const Lable = styled.label`
font-weight: 500;
font-size: large;
`
const Input = styled.input`
width:70%;
border: none;
  outline: none;
  border-bottom: 1.5px solid var(--orange); 
  margin-right: 5px;
`

const GenderButton = styled.button`
  padding: 6px 15px;
  margin: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ clicked }) => (clicked ? 'var(--orange)' : '#ccc')};
  color: ${({ clicked }) => (clicked ? '#fff' : '#000')};
`



const ButtonRegister = styled.button`
margin-right: 20px;
border: none;
padding: 3px 6px;
border-radius: 4px;
border: 1px solid white;
background-color: var(--orange);
color:white;
transition: all 1s ease;
&:hover{
  color: var(--orange);
  background-color: white;
  border: 1px solid var(--orange);

}

`
const Error = styled.span`
color:red;

`


const VaccineRegister = () => {
  const [name, setName] = useState('')
  const [Dob, setDob] = useState('')
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [gender, setGender] = useState("male")
  const [error, setError] = useState(false);
  const [success,setSuccess] =useState(false)
  const [id,setId] = useState(null)


  const navigate = useNavigate();

  const handleGender = (gender) => {
    setGender(gender);
  };

  const handleClick = async (e) => {
    setError(false)
    e.preventDefault();
    try {
      const res = await  userRequest.post("/recipient/", { name, Dob, phone, aadhar, gender });
    console.log(res);
      setId(res.data._id)
      alert("success fully register");
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setError(error);
      console.log(error)
    }
  }

  useEffect(() => {

    setTimeout(() => {
      if(success == true)
      {
        console.log("recipent id"+ id)
        navigate("/schedule",{state:{id:id}})
      }
    }, 2000);
  
  }, [success])
  


  return (

    <Container>
      <ContainerWrapper>
        <Header>
          <Title><Label></Label>  Register for Vaccination</Title>
          <Notice>Your Photo ID will be verified at the time of your vaccination appointment. Please provide the details of the Photo ID you will carry for vaccination.
          </Notice>
        </Header>
        <Form>
          <Item>
            <Lable htmlFor='name'>Name:</Lable>
            <Input
              type='text'
              name='name'
              placeholder='Enter your Name'
              onChange={e => setName(e.target.value)}
            ></Input>
          </Item>
          <Item>
            <Lable htmlFor='year'>Year of Birth:</Lable>
            <Input
              type="String"
              name='year'
              min="1900" max="2099"
              placeholder='Enter Year'
              onChange={e => setDob(e.target.value)}

            ></Input>
          </Item>
          <Item>
            <Lable htmlFor='aadhar'>Aadhar no:</Lable>
            <Input onChange={e => setAadhar(e.target.value)}
              type='text' name='number' pattern="[0-9]{12}" maxlength="12" placeholder='Enter your addhar No'></Input>
          </Item>
          <Item>
            <Lable htmlFor='phone'>Phone Number:</Lable>
            <Input onChange={e => setPhone(e.target.value)}
              type='tel' name='phone' placeholder='Enter your Phone Number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></Input>
          </Item>
          <Item>
            <Lable>Gender:</Lable>
            <GenderButton
              clicked={gender === "male"}
              onClick={() => handleGender('male')}
            >
              Male
            </GenderButton>
            <GenderButton
              clicked={gender === 'female'}
              onClick={() => handleGender('female')}
            >Female</GenderButton>
            <GenderButton
              clicked={gender === 'other'}
              onClick={() => handleGender('other')}
            >Other</GenderButton>

          </Item>

          <Link className='link' to="/schedule">
            <ButtonRegister onClick={handleClick}>Register For Vaccine</ButtonRegister>
          </Link>
          {
            error && <Error>Something went wrong! Enter valid Crediential</Error>
          }
        </Form>

      </ContainerWrapper>
    </Container>
  )
}

export default VaccineRegister
