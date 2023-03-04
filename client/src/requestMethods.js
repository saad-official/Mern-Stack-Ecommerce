import axios from "axios";
const BASE_URL = "https://mern-stack-ecommerce-nu.vercel.app/api/products/api/";
let temp = localStorage.getItem("persist:root");
console.log(temp);
let TOKEN = "";
if (!temp) {
  TOKEN = JSON.parse(JSON.parse(temp?.user)).currentUser?.accessToken;
} else {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser?.accessToken;
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
