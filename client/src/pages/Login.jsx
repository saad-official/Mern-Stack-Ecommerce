import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';


const Container = styled.div`
width:100vw;
height:100vh;
background:  linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ),  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
display: flex;
justify-content: center;
align-items: center;
background-size: cover;
object-fit: cover;

`;

const Wrapper = styled.div`
background-color: white;
padding: 20px;
width:25%;
${mobile({width:'75%'})}


`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding: 10px;
outline-color: teal;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
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
margin-bottom: 15px;

:hover{
    transform: scale(1.1);
}
:disabled{
    color:green;
    cursor: not-allowed;
}
`;

const Link = styled.a`
margin:5px 0px;
font-size:12px;
cursor: pointer;
text-decoration: underline;

`;

const Error = styled.span`
color:red;

`;


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, isError } = useSelector((state) => state.user)
    

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

  return (
      <Container>
          <Wrapper>
          
              <Title>
                  SIGN IN 
              </Title>

              <Form>
                  
                  <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} /> 

                  
                  <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />

                  <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                  {isError ?  <Error>Something Went Wrong</Error> : ''}

                  <Link>Do Not Remember the Passwprd</Link>
                  <Link>Create A New Account</Link>
              </Form>

              </Wrapper>
          
    </Container>
  )
}

export default Login