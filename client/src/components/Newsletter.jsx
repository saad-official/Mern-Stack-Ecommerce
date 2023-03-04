import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;

justify-content: center;
align-items: center;
flex-direction: column;


 `;

const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 1rem;
  ${mobile({fontSize:'40px'})}

 `;

const Desc = styled.div`
font-size: 24px;
margin-bottom: 1.2rem;
text-align: center;
${mobile({fontSize:'18px'})}

 `;

const InputContainer = styled.div`
   width:50%; 
   height:35px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border:2px solid lightgray;
   background-color: white;
  ${mobile({width:'80%'})}

 `;

const Button = styled.button`
flex:2;
border: none;
background-color: teal;
padding: 5px;
color: white;
cursor: pointer;
`;

const Input = styled.input`
   flex:8;
   padding-left: 20px;
    height: 100%;
    border: none;
    outline: none;

`;



const Newsletter = () => {
  return (
      <Container>
          <Title>NewsLetter</Title>
          <Desc>Get Timely Updates from your Favourite Products</Desc>
          <InputContainer>
              <Input placeholder='Your Email'  />
              <Button>
                  <Send />
              </Button>
              </InputContainer>

    </Container>
  )
}

export default Newsletter