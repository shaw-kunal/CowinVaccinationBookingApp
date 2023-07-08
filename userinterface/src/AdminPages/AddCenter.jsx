import React, { useState } from 'react'
import styled from "styled-components"
import ASideBar from '../adminComponent/Sidebar/ASideBar'
import ANavbar from '../adminComponent/Navbar/ANavbar'
import TitleHeader from '../adminComponent/TitleHeader'
const Container = styled.div`
display: flex;
`
const InnerContainer = styled.div`
 flex: 6;
width: 100px;
`
const Form = styled.div`
width: fit-content;
margin: 20px;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Items = styled.div`
width:fit-content;
display: flex;
flex-wrap: wrap;
gap:20px;
`
const Item = styled.div`
width: 400px;
display: flex;
align-items: center;
margin-left: 10px;
justify-content: space-between;
`
const Label = styled.label``
const Input = styled.input`
width:70%;
border: none;
outline: none;
border-bottom:1px solid black;

`
const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`
const StyledOption = styled.option`
  background-color: #f9f9f9;
`





const AddCenter = () => {

    const [cost, setCost] = useState("Free")
    const [price, setPrice] = useState(0);

    return (
        <Container>
            <ASideBar />
            <InnerContainer>
                <ANavbar />
                <TitleHeader title="Create The Vaccination Center" />
                <Form>
                    <Items>
                        <Item>
                            <Label>Center Name</Label>
                            <Input placeholder='Enter Center Name'></Input>
                        </Item>
                        <Item>
                            <Label>Pincode</Label>
                            <Input placeholder="Enter Pincode"></Input>
                        </Item>
                        <Item>
                            <Label>City</Label>
                            <Input placeholder="Enter City"></Input>
                        </Item>
                        <Item>
                            <Label>District</Label>
                            <Input placeholder='Enter District'></Input>
                        </Item>
                        <Item>
                            <Label>Landmark</Label>
                            <Input placeholder='Landmark'></Input>
                        </Item>
                        <Item>
                            <Label>WorkingHr</Label>
                            <Input></Input>
                        </Item>
                        <Item>
                            <Label>Cost:</Label>
                            <StyledSelect
                                onChange={e => setCost(e.target.value)}
                            >
                                <StyledOption value="">Free</StyledOption>
                                <StyledOption value="">Paid</StyledOption>
                            </StyledSelect>
                        </Item>
                        <Item>
                            {
                                (cost != "Free") &&
                                <>      <Label>WorkingHr</Label>
                                    <Input></Input>

                                </>
                            }
                        </Item>

                    </Items>
                </Form>
            </InnerContainer>

        </Container>
    )
}

export default AddCenter
