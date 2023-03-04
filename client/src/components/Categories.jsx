import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Container = styled.div`
    /* display: flex; */
    display: grid;
    padding: 10px;
    /* width: 97%;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    display: grid;  */
 justify-content: center;
 grid-gap: 2rem;
 grid-template-columns: repeat(auto-fill,380px);   
`;

const ImgContainer = styled.div`
  position: relative;
  height: 300px;
  width: 600px;
  object-fit: contain;
  background-image: url('https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-16.jpg');
  background-position: 50%!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
  /* background-color: bisque; */
  /* width: 80%; */
  /* margin-left: 2rem; */
  img{
    width: 100%;
    height:100%;
  }
`;

const ImgInfoContainer = styled.div`
  /* background-color: green; */
  /* flex: 1 1 50rem; */
  /* height: 100vh; */
  padding: 0px 20px;
  /* min-width: 20%; */
  background-image: url('https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-3.jpg');
  min-height: 400px;
  width: 40%;
  /* background-size: auto 100% !important; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-position: 0%;
  background-repeat: no-repeat;

`;
const Title = styled.h1`
  font-size: 20px;
  color: black;
  margin: 20px 0px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #f15959;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  transition: 0.3s;
  :hover {
    background-color: #282626;
    color: white;
  }
`;


const Categories = () => {
  return <>
      <Container>
          {categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  </>
}

export default Categories