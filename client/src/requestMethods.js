import axios from "axios";
const BASE_URL = "http://localhost:8080/api/";
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
