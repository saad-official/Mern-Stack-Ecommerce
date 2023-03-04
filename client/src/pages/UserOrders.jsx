import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import { publicRequest, userRequest } from "../requestMethods";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
`;
const SubContainer = styled.div`
  /* display: flex; */
`;
const InnerContainer = styled.div`
display: flex;
/* gap: 20px; */
/* align-items: center; */
    /* grid-template-columns: 300px;  */
    /* max-width: 480px; */
`;

const UserOrders = () => {
    const location = useLocation();
    const [orders, setOrders] = useState([]);
    const id = location.pathname.split('/')[2];
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('/orders/find/' + id);
                setOrders(res.data);
              } catch (error) {
                console.log(error);
              }
        }
        getOrders();
    }, [id]);
  return (
    <>
      <Announcment />
      <Navbar />
    <Container>
      <SubContainer>
        <h1 style={{textAlign:'center', marginBottom:'20px'}}>Order History</h1>
      <section style={{padding:'0 80px', marginLeft:'100px'}} className='cart' >
            <table width="100%">
                <thead>
                    <tr>
                        <td>Order Id</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Status</td>
                    </tr>
                </thead>
            <tbody>
            {orders.map((item) => (
                    <tr>
                      <>
                  <td>{item.userId}</td>
              <td>{item.amount}</td>
              <td>{item.quantity}</td>
                  <td>{item.status}</td>
                   </>
              </tr>
                 ))}

          </tbody>
          </table>
          </section>
          {/* {orders.map((item) => (
              <InnerContainer>
                  <div>{item.userId}</div>
              <div>{item.amount}</div>
              <div>{item.quantity}</div>
                  <div>{item.status}</div>
           </InnerContainer> 
          ))} */}
        </SubContainer>
      </Container>
      </>
  )
}

export default UserOrders