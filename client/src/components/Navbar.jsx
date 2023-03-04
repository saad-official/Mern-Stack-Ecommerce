import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Search from "./Search";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../redux/userRedux";
import { mobile } from '../responsive';
const Container = styled.div`
  height: 60px;
  ${mobile({height:'50px'})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({display:'none'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex:2, justifyContent:'center'})}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({marginLeft:'5px'})}
  padding: 5px;
`;


const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize:'12px', marginLeft:'10px'})}

  
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> En </Language>
          <SearchContainer>
           <Search />
          </SearchContainer>
        </Left>
        <Center>
        <Link style={{textDecoration:'none', color:'black', fontWeight:'bold'}} to='/'>
            <Logo>Shopper</Logo>
            </Link>
        </Center>
        <Right>
          {user ?
           
            <>
            <a style={{textDecoration:'none',color:'black' }} href={`/orders/${user._id}`}> <MenuItem>MY ORDERS</MenuItem> </a>
              <MenuItem onClick={(e) => handleLogout()}>LOGOUT</MenuItem>
            </>:<>
            <Link style={{textDecoration:"none", color:'grey' }} to={'/login'}>
                <MenuItem>SING IN</MenuItem>
              </Link>
              <Link style={{textDecoration:"none",color:'grey'}} to={'/register'}>
              <MenuItem>REGISTER</MenuItem>
              </Link>
              </>}
          {console.log('user', user)}
      
            

          <Link style={{listStyle:"none", color:'black'}} to={'/cart'}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
