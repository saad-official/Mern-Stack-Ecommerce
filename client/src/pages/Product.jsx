import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({padding:'10px', flexDirection:'column'})}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:'40vh'})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding:'10px'})}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({textAlign:'center'})}
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  ${mobile({width:'100%'})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${mobile({width:'100%'})}
`;


const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;
/* width: 50%; */
/* justify-content: space-between; */
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;

`;

const Button = styled.button`
padding: 15px;
border:2px solid teal;
background-color: white;
font-weight: 600;
cursor: pointer;
transition: background-color 0.3s ease;

:hover{
    background-color: teal;
    color: white;
}

`;



const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {

      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();

  }, [id]);


  const handleQuantity = (type) => {

    if (type === 'desc') {
     
      setQuantity(quantity <= 0 ? 0: quantity - 1);
    
    }  else
      setQuantity(quantity + 1);
  };

  const handleClick = () => {
    // update Cart
    dispatch(
      addProduct({ ...product, quantity,size, color })
    )
  };
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}

          </Desc>
          <Price>{product.price}</Price>

          <FilterContainer>
            <Filter>
              
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor className={c} color={c} key={c} onClick={(e) => setColor(c)} ></FilterColor>
              ))};
     
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                 ))};
              </FilterSize>
            </Filter>
                  </FilterContainer>
                  
                  <AddContainer>
                      <AmountContainer>
                          <Remove onClick={(e) => handleQuantity("desc")} style={{cursor:"pointer"}}></Remove>
                          <Amount>
                              {quantity}
                          </Amount>
                          <Add onClick={(e) => handleQuantity("inc")}  style={{cursor:"pointer"}} />
                          
                      </AmountContainer>

            <Button onClick={(e) => handleClick()}>Add to Cart</Button>          
                  </AddContainer>

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
