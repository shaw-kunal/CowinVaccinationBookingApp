import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
height: 50px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin-bottom:40px ;


`
const Title = styled.p`
padding-left: 30px;
 font-size: 26px;
font-weight: 600;
font-family: 'Times New Roman', Times, serif;
`


const TitleHeader = ({ title, search, searchTitle }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
        </HeaderContainer>
    )
}

export default TitleHeader
