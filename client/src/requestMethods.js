import axios from "axios";
// https://mern-stack-ecommerce-nu.vercel.app/api/products
const BASE_URL = "https://mern-stack-ecommerce-nu.vercel.app/api/";
// let temp = localStorage.getItem("persist:root");
// console.log(temp);
// let TOKEN = "";
// if (!temp) {
//   TOKEN = JSON.parse(JSON.parse(temp?.user)).currentUser?.accessToken;
// } else {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser?.accessToken;
// }

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
