import React from 'react'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import ProductList from './ProductList'

const Search = () => {
  return (
      <div>
           <Announcment></Announcment>
          <Navbar />
          {/* <ProductList search={true} /> */}

          <Products />
           <Newsletter />
      <Footer />
    </div>
  )
}

export default Search