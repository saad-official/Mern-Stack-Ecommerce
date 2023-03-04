import React from "react";
import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import Products from "../components/Products";
function Home() {
  return (
    <div>
      <Announcment></Announcment>
      <Navbar />
      <Slider />
      <Categories />
      <h1 style={{textAlign:'center'}}>New Arrival</h1>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
