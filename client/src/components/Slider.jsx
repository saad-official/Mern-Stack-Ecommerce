import {
  ArrowBackIosOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from '../responsive';
// import pic from "../components/b6.jpg";
import { sliderItems } from "../data";
import { Link } from 'react-router-dom';
const Container = styled.div`
  ${mobile({display:"none"})}

  width: 100%;
  height: 100vh;
  /* background-color: #d2cbcb; */
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  :hover {
    transform: scale(1.1);
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
  object-fit: cover;
  flex-direction: ${(props) =>
    props.bg === "rgb(235, 161, 112)" && "row-reverse"};
`;
const ImgContainer = styled.div`
  position: relative;
  height: 100%;
  object-fit: cover;
  /* background-color: bisque; */
  /* width: 80%; */
  flex: 1;
  /* margin-left: 2rem; */
`;

const ImgInfoContainer = styled.div`
  /* background-color: green; */
  /* flex: 1 1 50rem; */
  /* height: 100vh; */
  width: 100vw;
  padding: 50px;
  /* min-width: 20%; */
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* background-position: center; */
  /* width: 100%; */
  /* min-width:100%; */
  /* object-fit: cover; */
`;
const Title = styled.h1`
  font-size: 50px;
  color: white;
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

const CircleContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: aqua;
  position: absolute;
  top: 0;
  /* left: 60%; */
  /* right: 50%; */
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>

            <ImgInfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to={`/products`}>
                <Button>SHOW NOW</Button>
                </Link>
            </ImgInfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
