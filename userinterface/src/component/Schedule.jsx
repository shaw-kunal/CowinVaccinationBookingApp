import { ArrowLeftOutlined, Label } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { publicRequest, userRequest } from '../requestMethod'

const Container = styled.div`
margin-top: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const ContainerWrapper = styled.div`
height: inherit;
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
position: relative;

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
width:80%;
border: none;
  outline: none;
  border-bottom: 1.5px solid var(--orange); 
  margin-right: 5px;
`





const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: var(--orange);
`;

const StyledOption = styled.option`
  background-color: #f9f9f9;
  color: var(--orange);
`
const Date1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:30px;
width: 100%;
`

const Button = styled.button`
margin-right: 20px;
border: none;
padding: 3px 6px;
border-radius: 4px;
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

const ResultContainer = styled.div`

margin-top: 20px;
width :100%;
border-top:1px solid var(--orange);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Result = styled.div`
margin-top: 30px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`
const RItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap:10px;
`
const Name = styled.div``
const Value = styled.div``
const Sechedule = styled.button`
margin-right: 20px;
border: none;
padding: 3px 6px;
border-radius: 4px;
border: 1px solid white;
background-color: var(--orange);
color:white;
transition: all 1s ease;
`

const Error = styled.p`
color: red;
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
position: absolute;
left:-120px;
`





const Schedule = () => {


  const [PinCode, setPinCode] = useState("")
  const [city, setCity] = useState("")
  const [District, setDistrict] = useState("")
  const [cost, setCost] = useState("Free");
  const [search, setSearch] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const [vaccine, setVaccine] = useState('Covishield')
  const [DoseNo, setDose] = useState("Dose 1")
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [updatedRecipient, setUpdateRecipient] = useState();

  const location = useLocation();
  const navigate = useNavigate();




  const handleClick = async (e) => {

    setError(false);
    e.preventDefault();
    setData([])
    try {
      if (search) {

        // that is search by pincode
        console.log("search by pin")
        const res = await userRequest.get(`/center?pincode=${PinCode}&cost=${cost}`)
        console.log(res.data)
        if (res != null)
          setData(res.data);
      }
      else {
        let res;
        console.log("search by Distrct")
        // that is search by district
        if (District != "" && city != "")
          res = await publicRequest.get(`/center?district=${District}&city=${city}&cost=${cost}`)
        else if (District != "" && city == "")
          res = await userRequest.get(`/center?district=${District}&cost=${cost}`)
        else if (District == "" && city != "")
          res = await userRequest.get(`/center?city=${city}&cost=${cost}`)
        if (res.data != null)
          setData(res.data);
      }


      console.log(data + " " + data.length)
    } catch (error) {
      setError(true)
      alert(error)
      console.log(error)
    }
  }

  const handleSchule = async (id) => {
    const userid = location.state.id;
    const useraadhar = location.state.aadhar

    setError(false);
    try {

      // first check is any user exist with these addhar no and have take dose1
      const alreadyReg = await publicRequest.get(`/recipient?aadhar=${useraadhar}&DoseNo=${DoseNo}`)
      console.log(alreadyReg)
      if (alreadyReg.data.length != 0) {
        setErrorMessage("You Are Already Take This Dose");
        setError(true)
      }
      else {
        const updatedData = {
          CenterId: `${id}`,
          vaccine: `${vaccine}`,
          DoseNo: `${DoseNo}`,
          cost: `${cost}`,
          DateOfVaccination: `${selectedDate.getTime()}`
        }

        const updateRecipient = await publicRequest.put(`/recipient/${userid}`, updatedData);
        console.log(updateRecipient)
        setUpdateRecipient(updateRecipient)
        alert("All set! succesfully schedule Your Appointment")
        setSuccess(true);
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    if (success == true)
      navigate("/Details", { state: {user: updatedRecipient.data} })
  }, [success])



  return (
    <Container>
      <Navbar balnk={true} />
      <ContainerWrapper>
        <Header>
          <Link to="/">
            <Buttonback> <ArrowLeftOutlined />Back</Buttonback>
          </Link>
          <Title><Label></Label>  Schedule Your Vaccination</Title>
        </Header>
        <Form>
          <Item>
            <div>
              <Lable>Dose:</Lable>
              <StyledSelect onChange={e => setDose(e.target.value)}>
                <StyledOption value="Dose1">Dose 1</StyledOption>
                <StyledOption value="Dose2">Dose 2</StyledOption>
                <StyledOption value="Booster">Booster </StyledOption>
              </StyledSelect>
            </div>
            <div>
              <Lable>vaccine:</Lable>
              <StyledSelect
                onChange={e => setVaccine(e.target.value)}>
                <StyledOption value="Covishield">Covishield</StyledOption>
                <StyledOption value="Covaxin">Covaxin</StyledOption>
                <StyledOption value="Gemovac">Gemovac</StyledOption>


              </StyledSelect>
            </div>
            <div>
              <Lable>Cost:</Lable>
              <StyledSelect onChange={e => setCost(e.target.value)}>
                <StyledOption value="Free">Free</StyledOption>
                <StyledOption value="Paid">Paid</StyledOption>
              </StyledSelect>
            </div>
          </Item>
          <Date1>
            <Lable>Sehdule your Date:</Lable>
            <Item>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable

              />
            </Item>
          </Date1>

          <Item>
            <div>
              <Button
                clicked={search === true}
                onClick={() => setSearch(true)}
              >Search By PinCode</Button>
              <Button
                onClick={() => setSearch(false)}
                clicked={search === false}
              >search By District</Button>
            </div>
          </Item>
          {
            search ?
              <Item>
                <Input
                  type="text" name='PinCode'
                  placeholder='Enter your Pincode'
                  onChange={(e) => setPinCode(e.target.value)}
                ></Input>
              </Item>
              :

              <Item>
                <Input
                  type="text" name='city'
                  placeholder='Enter your City'
                  onClick={(e) => setCity(e.target.value)}
                ></Input>
                <Input
                  type="text" name='District'
                  placeholder='Enter your District'
                  onClick={(e) => setDistrict(e.target.value)}
                ></Input>
              </Item>
          }

          <Link className='link' to="/Details">
            <ButtonRegister onClick={handleClick}>Search</ButtonRegister>
          </Link>
          {error && <Error>{errorMessage}</Error>}
        </Form>

        <ResultContainer>
          {
            (data.length !== 0) ? data.map((d, i) => (<Result key={i}>
              <RItem>
                <Name>Center:</Name>
                <Value> {d.name}</Value>
              </RItem>
              <RItem>
                <Name>City:</Name>
                <Value> {d.city}</Value>
              </RItem>
              <RItem>
                <Name>District:</Name>
                <Value> {d.district}</Value>
              </RItem>
              <RItem>
                <Name>Price:</Name>
                <Value> {d.price}</Value>
              </RItem>
              <RItem>
                <Name>landmark:</Name>
                <Value> {d.landmark}</Value>
              </RItem>
              <RItem>
                <Name>workingHr:</Name>
                <Value> {d.workingHr}</Value>
              </RItem>
              <Sechedule onClick={() => handleSchule(d._id)}>Schedule Your Vaccination</Sechedule>
            </Result>)) : <p>Noting To Show</p>
          }
        </ResultContainer>
      </ContainerWrapper>
    </Container>
  )
}

export default Schedule
