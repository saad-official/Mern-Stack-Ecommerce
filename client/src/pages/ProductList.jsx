import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { mobile } from '../responsive';
const Container = styled.div`

`;
const Title = styled.h1`
${mobile({textAlign:'center'})}
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({width:'0px 20px', display:"flex", flexDirection:'column'})}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right:20px;
${mobile({marginRight:'0px'})}
`;


const Option = styled.option`

`;

const Select = styled.select`
padding: 10px;
margin-right: 10px;
${mobile({margin:'10px 0px'})}
`;
const ProductList = ({search}) => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({});

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value,
        })
    };
    console.log(filter);
  return (
      <Container>
          <Navbar />
          <Announcment />
          {search && <Title>Search Result for {cat}</Title>}
          <FilterContainer>     
              <Filter><FilterText>
              Filter Products
              </FilterText>
              
                  <Select name="color" onChange={handleFilter}>
                      <Option disabled >Color</Option>
                      <Option>white</Option>
                      <Option>black</Option>
                      <Option>red</Option>
                      <Option>blue</Option>
                      <Option>yellow</Option>
                      <Option>green</Option>
                  </Select>


                  <Select name="size" onChange={handleFilter}>
                  <Option disabled>Size</Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                  </Select>
              </Filter>
              
              
              <Filter>
              <FilterText>
              Sort Products:
                  </FilterText>
                  
                  <Select onChange={(e) => setSort(e.target.value)}>
                      <Option value="newest" >Newest</Option>
                      <Option value="asc" >Price (asc)</Option>
                      <Option value="desc" >Price (desc)</Option>
                  </Select>


              </Filter>  
          </FilterContainer>
          <Products cat={cat} filters={filter} sort={sort} flag={true} />
          <Newsletter />
          <Footer />
    </Container>
  )
}
 
export default ProductList