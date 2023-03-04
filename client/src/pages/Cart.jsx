import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcment from "../components/Announcment";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import './Cart.css';

const KEY = process.env.STRIPE_PUBLIC_KEY;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:'10px'})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg === "black" ? "white" : "black")};
  border: ${(props) => (props.bg === "black" ? "none" : "1px solid black")};
  /* transition:     background-color 0.5s ease; */
  /* :hover{
    background-color: ${(props) => (props.bg === "black" ? "white" : "black")};
    color:${(props) => (props.bg === "black" ? "black" : "white")};
    border:${(props) => (props.bg === "black" ? "1px solid black" : "none")};
} */
`;

const TopTexts = styled.div`
${mobile({display:'none'})}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile( {flexDirection:'column'})}
`;

const Info = styled.div`
  flex: 3;
  /* background-color: red; */
`;

const Summary = styled.div`
  flex: 1;
  /* background-color: aquamarine; */
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile( {flexDirection:'column'})}
`;

const ProductDetails = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
`;
const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
${mobile( {fontSize:'13px'})}
`;
const ProductId = styled.span`
${mobile( {fontSize:'10px'})}
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-weight: 200;
  font-size: 30px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryDiv = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryText = styled.div``;

const SummaryPrice = styled.span``;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;

  :hover {
    background-color: white;
    color: black;
    font-weight: 800;
  }
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:8080/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history('/success', { state: { stripeData: res.data, products: cart }});
     
      } catch (error) {}
      };
    stripeToken &&   makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Link to='/products'>
          <TopButton bg="transparent"> CONTINUE SHOPING</TopButton>
          </Link>  
          <TopTexts>
            <TopText>Shoping Bag({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton bg="black">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      {" "}
                      <br /> Product: {product.title}{" "}
                    </ProductName>
                    <ProductId>
                      {" "}
                      <br /> Id: {product._id}{" "}
                    </ProductId>{" "}
                    <br />
                    <ProductColor color={product.color} />
                    <ProductSize>
                      {" "}
                      <br /> Size:{product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>

                <PriceDetails>
                  <ProductAmountContainer>
                    {/* <Add /> */}
                    <ProductAmount>{product.quantity}</ProductAmount>
                    {/* <Remove /> */}
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <SummaryDiv>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryText>SubTotal</SummaryText>
              <SummaryPrice>${cart.total}</SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Estimated Shiping</SummaryText>
              <SummaryPrice>$ 5.0</SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Shiping Discount</SummaryText>
              <SummaryPrice>$ -5.90</SummaryPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryText>ToTal</SummaryText>
              <SummaryPrice>${cart.total + 5}</SummaryPrice>
            </SummaryItem>
            <StripeCheckout
              name="Zabi Store"
              image="https://firebasestorage.googleapis.com/v0/b/shop-3c621.appspot.com/o/1677623890660kid-removebg-preview.png?alt=media&token=acf434bd-36ed-4558-a6e3-dd8fcbe589f7"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </SummaryDiv>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
