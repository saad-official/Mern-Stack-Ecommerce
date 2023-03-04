import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
flex:1;
margin:3px;
/* text-align: center; */
position: relative;
height: 500px;
min-height: 500px;
max-height: 50px;
min-width: 400px;
${mobile({minWidth:'100%'})}
max-width: 400px;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
:hover{
  background-color: rgba(31,31,31,.15)!important;
}
transition: background-color 0.3s;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
          <Image src={item.img} />
          <Info>
              <Title>{item.title}</Title>
              <Button>Shop Now</Button>
              </Info>
              </Link>
    </Container>

  )
}

export default CategoryItem