import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import UserOrders from "./pages/UserOrders";
import Search from "./pages/Search";
const App = () =>
{
  // const user = true;
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return <div>
    <BrowserRouter>
        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/products'  element={<ProductList />} />
        <Route path="/orders/:id" element={ <UserOrders />} />

        <Route path="/products/:category" element={<ProductList />} />
      
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to={'/'}  /> : <Login/>} />
        {/* <Route path="/register" element={user ? <Navigate to={'/'} /> : <Navigate to={'/register'} />}> 
        </Route> */}
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    

    {/* <Product /> */}
    {/* <Register /> */}
    {/* <Login/> */}
    {/* <Cart /> */}

  </div>;
};

export default App;