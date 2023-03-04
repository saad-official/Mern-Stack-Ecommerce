import React from 'react'
import { popularProducts } from '../data'
import styled from 'styled-components';

import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { publicRequest } from '../requestMethods';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.2);
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;
z-index: 3;
cursor: pointer;
`;




const Container = styled.div`
flex:1;
background-color: #f5fbfd;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
flex-wrap: wrap;

:hover ${Info}{
opacity: 1;
}
`;

const Image = styled.img`
  height : 75%;
  z-index: 2;
  /* margin-left: 2rem; */
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;



const Icon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
z-index: 3;
margin: 10px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;
:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;

export const Product = ({ product }) => {
    // console.log('i am in single pro ' ,product);
  return (
      <Container>
          <Circle />
          <Image src={product.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlined />

              </Icon>

              <Icon>
                  <Link to={`/product/${product._id}`}>
                  <SearchOutlined/>
                  </Link>
              </Icon>
              <Icon>

                  <FavoriteBorderOutlined />
                  
              </Icon>
          </Info>
      </Container>
  )
}
