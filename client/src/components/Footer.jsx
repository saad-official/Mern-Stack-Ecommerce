import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
display:flex;
${mobile({flexDirection:'column'})}

`;

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;

`;

const Logo = styled.div``;

const Desc = styled.div`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display:flex
`;

const SocalIcon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color: #${(props => props.bg)};
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
cursor: pointer;
transition: opacity 0.3s ease;
:hover{
opacity: .7;
}

`;




const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:'none'})}

`;


const Title = styled.h3`
  margin-bottom:30px;  
`;

const List = styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor:pointer;
:hover{
    text-decoration: underline;
    color:teal;
}
`;

const Right = styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const Payment = styled.img`
width:50%;
cursor: pointer;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              
              <Title>Shopper</Title>
              <Desc>
              There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
              </Desc>
              <SocialContainer>
                  <SocalIcon bg='3B5999'>
                      <Facebook />
                  </SocalIcon>

                  <SocalIcon bg='55ACEE'>
                      <Twitter/>
                  </SocalIcon>

                  <SocalIcon bg='E4405F'>
                      <Instagram />
                  </SocalIcon>

                  <SocalIcon bg='55ACEE'>
                   <LinkedIn />
                  </SocalIcon>
                 
                  </SocialContainer>
          </Left>
          <Center>
              <Title>UseFul Links</Title>
              <List>
              <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
              </List>

          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem>
                  <Room style={{marginRight:"10px"}} />
                  622 Dixie Path , South Tobinchester 98336
              </ContactItem>

              <ContactItem>
                  <Phone style={{marginRight:"10px"}} />
                  +1 234 56 78
              </ContactItem>


              <ContactItem>
                  <MailOutline style={{marginRight:"10px"}}/>
              contact@lama.dev
              </ContactItem>

              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
    </Container>    
  )
}

export default Footer