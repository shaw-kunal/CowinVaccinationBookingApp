import { Label } from '@mui/icons-material'
import React, { useState } from 'react'
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







const Schedule = () => {


  const [PinCode, setPinCode] = useState("")
  const [city, setCity] = useState("")
  const [District, setDistrict] = useState("")
  const [cost, setCost] = useState("Free");
  const [search, setSearch] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const [vaccine, setVaccine] = useState('')
  const [DoseNo, setDose] = useState("")
  const [Datev, setDatev] = useState("")

  const location = useLocation();
  const navigate = useNavigate();
  const userid = location.state.id;


  const handleClick = async (e) => {
    setError(false);
    e.preventDefault();
    setData([])
    try {
      if (search) {

        // that is search by pincode
        console.log("search by pin")
        const res = await userRequest.get(`/center?pincode=${PinCode}`)
        console.log(res.data)
        if (res != null)
          setData(res.data);
      }
      else {
        let res;


        console.log("search by Distrct")
        // that is search by district
        if (District != "" && city != "")
          res = await publicRequest.get(`/center?district=${District}&city=${city}`)
        else if (District != "" && city == "")
          res = await userRequest.get(`/center?district=${District}&cost=${cost}`)
        else if (District == "" && city != "")
          res = await userRequest.get(`/center?city=${city}&&cost=${cost}`)
        if (res != null)
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
    try {
      console.log(userid)
       console.log(id)
      // await publicRequest.put(`/recipient/${userid}`, `{ CenterId:${id} ,vaccine:${vaccine}, DoseNo:${DoseNo}}`)
      //  await publicRequest.post() 
      // console.log("now naviagate")
      navigate("/Details");


    } catch (error) {

    }
  }



  return (
    <Container>
      <Navbar balnk={true} />
      <ContainerWrapper>
        <Header>
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
              <StyledSelect>
                <StyledOption onClick={() => setCost("Free")} value="Free">Free</StyledOption>
                <StyledOption value="Paid" onClick={() => setCost("Paid")}>Paid</StyledOption>
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
        </Form>

        <ResultContainer>
          {
            (data.length !== 0) && data.map((d, i) => (<Result key={i}>
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
                <Value> {d.Price}</Value>
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
            </Result>))
          }
        </ResultContainer>
      </ContainerWrapper>
    </Container>
  )
}

export default Schedule
