import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data';
import { Product } from './Product';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;
const Products = ({ cat, filters, sort, flag = false }) => {
  const [products, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const location = useLocation();
  const keyword = location.pathname.split('/')[2];
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get((cat || flag) ? ( 
          cat ? (`http://localhost:8080/api/products?category=${cat}`) :
          (`http://localhost:8080/api/products`)) :( keyword ? `http://localhost:8080/api/products?keyword=${keyword}` :'http://localhost:8080/api/products?new=new'));
        
        // {flag ? res =  await axios.get(`http://localhost:8080/api/products`): ''}
        // console.log('sss', res.data);
        setProduct(res.data)
      }
      catch (err) {
        console.log(err);
      }
    }
    getProducts();

  }, [cat, keyword]);

  useEffect(() => {

    (cat || flag) && setFilterProduct(
      products.filter((item) => 
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [cat, products, filters, flag]);


  useEffect(() => {
    if (sort === 'newest') {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    else if (sort === 'asc') {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    else {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  
  // console.log('filter', filterProduct);
  return (
    <>
      
      {keyword && <>
        {products.length ? (<h1 style={{ marginLeft: '20px', fontSize:'30px' }}>Search for {keyword}</h1>) : <h1 style={{ marginLeft: '20px', marginTop:'20px' }}> Sorry No Result Found </h1> }</>}
    <Container>
      {(cat || flag)
      ? filterProduct.map((product) => <Product product={product} key={product.id}></Product>) 
      :  products.slice(0, keyword ? products.length : 4).map((product) => <Product product={product} key={product.id}></Product> )}   
      </Container>
      </>
  )
}

export default Products