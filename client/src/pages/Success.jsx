import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { removeProduct } from '../redux/cartRedux';
import { userRequest } from '../requestMethods';



const Success = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = location.state.products;
  const data = location.state.stripeData;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderid] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderid(res.data._id);
        dispatch(removeProduct());
      } catch (error) {
        console.log(error);
      }
    }
    data && createOrder();
  }, [cart, data, currentUser]);
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center"
    }}
    >
      {orderId ? `Order has Been Created Successfully Your Order Number is ${orderId}`:
        `Successful. Your Order is Being Prepared...`}
      <Link to='/'>
      <button style={{padding:10, marginTop: 20}}>Go To HomePage</button>    
       </Link>
      
    </div>
  )
}

export default Success