import React, { useState } from "react";
// import Search from "./Search";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px',  })}
  
  :focus {
    outline: none;
  }

`;

const SearchProduct = () => {
    const [keyword, setKeyword] = useState('');
    let navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
          navigate(`/search/${keyword}`);
    }
    setKeyword('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <Search style={{ color: "gray", fontSize: 16 }}></Search>
        <button type="submit" hidden></button>
      </form>
    </div>
  );
};

export default SearchProduct;
