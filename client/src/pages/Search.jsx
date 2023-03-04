import React from 'react'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Search = () => {
  return (
      <div>
           <Announcment></Announcment>
          <Navbar />

          <Products />
           <Newsletter />
      <Footer />
    </div>
  )
}

export default Search