import axios from "axios";
const BASE_URL = "http://localhost:8080/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser?.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTM1OGJkYzEyMDBlNDcyMmE3NTRkYiIsIkFkbWluIjp0cnVlLCJpYXQiOjE2NzIzMjY2MzEsImV4cCI6MTY3MjU4NTgzMX0.XrlMXbgOptPpW5X42MfNH6Gcorllvs1j0ErzDQ6M8zw";
// console.log('ddd', TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
