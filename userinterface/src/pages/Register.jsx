import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { init } from 'ityped'
import background from "./../images/docteor.png"
import "./../global.css"
import Navbar from '../component/Navbar'


const Container = styled.div`
flex-direction: column;
background-color: aliceblue;
`
const Heading = styled.div`
font-size: 30px;
font-weight: 700px;
margin-bottom: 20px;
color: var(--orange);
`
const MainContainer = styled.div`
padding-top: 70px;
`
const MainInnerContainer = styled.div`
display:flex;
border-radius: 50px;
margin: 40px;
overflow: hidden;
`

const LeftContainer = styled.div`
flex:1;
width: 50%;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`
const Quote = styled.div`
padding: 35px;
font-weight: 400;
position: absolute;
left: 8px;
top:90px;
width:300px ;
`
const Line = styled.p`
font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 30px;
color: var(--video);
text-align: center;
`

const RightContainer = styled.div`
flex:1;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:40px;
margin-right: 10px;
display: flex;
flex-direction: column;

`
const StyledForm = styled.form`
display: flex;
flex-wrap: wrap;
width:100%;
gap:20px;`


const FormItem = styled.div`
width:300px;
display: flex;
flex-direction: column;
position: relative;
`
const FormLabel = styled.label`
margin-bottom: 10px;
color:var(--orange);
font-weight: 500;
 font-size: 18px;
`
const FormInput = styled.input`
 padding: 6px 12px;

 font-weight: 500;
 font-style: 20px;
 
 border: 1px solid orange;
 border-radius: 5px;
 font-size: 17px;
 &:focus{
   /* box-shadow: 0 0 5px rgba(81, 203, 238, 1); */
   outline: none;
                }         
`
const RadioItem = styled.div`
width: 100%;
`
const RadioGroup = styled.div`
display:flex;
gap: 10px;
`

const Lable = styled.p`
margin-right:15px;`

const RegisterBtn = styled.button`
background-color: #1cc7d0;
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
background-image: var(--buttonBg);
gap:10px;
transition: width 0.2s ease-in;

&:hover{
  background-image: var(--buttonBgR);
    width: 150px; 

}
`
const Registration = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef)
    init(textRef.current, {
      showCursor: false,
      backDelay: 5000,
      backSpeed: 60,

      strings: [` "Let's Fight Together Against COVID 19 "`,
        `"
        "United we stand, India will overcome, together we'll conquer COVID-19."`
        ]
    });



  }, [])

  return (
    <Container>
    <Navbar balnk={false}/>

      <MainContainer>
        <MainInnerContainer>
          <LeftContainer>
            <Quote>
              <Line ref={textRef}></Line>

            </Quote>
          </LeftContainer>
          <RightContainer>
            <Heading>Create An Account</Heading>
            <StyledForm>
              <FormItem>
                <FormLabel htmlFor='username'>User Name</FormLabel>
                <FormInput  type='text' name="username" placeholder='Full name' />
              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Email'>Email</FormLabel>
                <FormInput className='textBoxR' type='Email' name="email" placeholder='Email ' />

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Phone'>Phone Number</FormLabel>
                <FormInput className='textBoxR' type='text' name="phone" placeholder=' Phone Number' />

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='addhar'>Addhar No:</FormLabel>
                <FormInput className='textBox' type='text' name="addhar" placeholder='Addhar Number' />

              </FormItem>
              <FormItem>
                <FormLabel htmlFor='Password'>Password</FormLabel>
                <FormInput className='textBoxR' type='text' name="Password" placeholder=' ' />
                {/* <label className='inputLabelR' >Password</label> */}
              </FormItem>


              <RadioItem>
                <FormLabel htmlFor='Gender'>Gender</FormLabel>
                <RadioGroup>
                  <FormInput type='radio' name='male' /><Lable>Male</Lable>
                  <FormInput type='radio' name='female' /><Lable>Female</Lable>
                  <FormInput type='radio' name='other' /><Lable>Other</Lable>
                  <FormInput type='radio' name='notspecify' /><Lable>Prefer Not to say</Lable>
                </RadioGroup>
              </RadioItem>
              <Link className="link" to="/login"><RegisterBtn>Register</RegisterBtn></Link>
            </StyledForm>



          </RightContainer>

        </MainInnerContainer>


      </MainContainer>
    </Container>
  )
}

export default Registration