import React, { useState } from 'react'
import {  redirect, useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';


const Container = styled.div`
width:100vw;
height:100vh;
background:  linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-size: cover;
object-fit: cover;

`;

const Wrapper = styled.div`
background-color: white;
padding: 20px;
width:40%;
${mobile({width:'75%'})}

`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;

const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
font-size: 15px;
text-transform: uppercase;
transition: transform 0.5s ease;

:hover{
    transform: scale(1.1);
}
`;



const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    async function handleRegister(e) {
        e.preventDefault();
        try {
            
        const res = await publicRequest.post("/auth/register", {
            name, username, password, email
        });
            // console.log(res);
            {res && navigate("/")}
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <Container>
          <Wrapper>
          
              <Title>
                  Create An Account
              </Title>

              <Form onSubmit={handleRegister}>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

                  <Input value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="last name" />

                  <Input value={username} onChange={(e) => setUserName(e.target.value)} placeholder="username" /> 
                  
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

                  <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />

                  <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm Password" />

                  <Agreement>
                      {/* <input type="checkbox" name="" id="" /> */}
                  By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>

                  <Button type='submit'>Create</Button>
              </Form>
              </Wrapper>
          
    </Container>
  )
}

export default Register;