import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: grid;
    padding: 10px;
 justify-content: center;
 grid-gap: 2rem;
 grid-template-columns: repeat(auto-fill,380px);   
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