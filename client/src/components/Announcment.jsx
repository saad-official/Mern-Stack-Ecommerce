import styled from "styled-components"
const Container  = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width:100%;

` 
const Announcment = () => {
  return (
      <Container>
          Super Deal! Free Shipping on Orders Over $500
    </Container>
  )
}

export default Announcment