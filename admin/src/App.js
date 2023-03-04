import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/login/Login";
import { useHistory } from "react-router-dom";
import Transaction from "./pages/transaction/Transaction";
function App() {
  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin : 'ddd';
  const admin = useSelector((state) => state.user.currentUser);
  let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin?.isAdmin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/transaction">
                <Transaction />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
        <Route>{!admin?.isAdmin && history.push("/login")}</Route>
        <Route path={"/login"}>{admin?.isAdmin && history.push("/")}</Route>
        {/* <Route path="/login" element={user ? <Navigate to={'/'}  /> : <Login/>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
