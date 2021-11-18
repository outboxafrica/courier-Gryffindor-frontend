import Header from "./Components/Header";
import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Products";
import { useStateValue } from "./Context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import HeaderAdmin from "./Admin/HeaderAdmin";
import Admin from "./Admin/Admin";
import LoginAdmin from "./Admin/LoginAdmin";
import Registeradmin from "./Admin/Registeradmin";
import ProductList from "./Admin/ProductList";
import CreateProduct from "./Admin/CreateProduct";
import CreateCategory from "./Admin/CreateCategory";
import CategoryList from "./Admin/CategoryList";
import OrderList from "./Admin/OrderList";
import OrderDetails from "./Admin/OrderDetails";
import CustomerOrders from "./Pages/customerOrders";
import WishList from "./Components/WishList";
import ProductsSort from "./Pages/ProductsSort";
import CustomerOrderDetails from "./Pages/CustomerOrderDetails";

function App() {
  const [{user, admin}, dispatch] = useStateValue();
  //piece of code which runs based on a given condition
  //useEfect hook
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    };

  }, [])

  useEffect(() => {
    const unsubscribeadmin = auth.onAuthStateChanged((adminUser) => {
      if(adminUser) {
        //user is logged in
        dispatch({
          type: 'SET_ADMIN',
          admin: adminUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_ADMIN',
          admin: null
        })
      }
    })
    return () => {
      unsubscribeadmin();
    }
  }, [])


  console.log(`user is: ${user}`)
  console.log(`admin is: ${admin}`)

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/product/:id">
              <Header />
              <Product />
              <Footer />
            </Route>
            <Route exact path="/login">
              <Header/>
              <Login />
              <Footer />
            </Route>
            <Route exact path="/register">
              <Header />
              <Register />
              <Footer />
            </Route>
            <Route exact path="/cart">
              <Header />
              <Cart />
              <Footer />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route exact path="/products">
              <Header/>
              <Products />
              <Footer />
            </Route>
            <Route exact path="/products/:category">
              <Header/>
              <ProductsSort />
              <Footer />
            </Route>
            <Route exact path="/orders">
              <Header/>
                <CustomerOrders />
              <Footer />
            </Route>
            <Route exact path="/order/:id">
              <Header />
              <CustomerOrderDetails />
              <Footer />
            </Route>
            <Route exact path="/wishlist">
              <Header/>
                <WishList />
              <Footer />
            </Route>
            <Route exact path="/admin">
                <HeaderAdmin />
                <Admin />
            </Route>
            <Route exact path="/admin/login">
              <HeaderAdmin />
              <LoginAdmin />
            </Route>
            <Route exact path="/admin/register">
              <HeaderAdmin />
              <Registeradmin />
            </Route>
            <Route exact path="/admin/products">
              <HeaderAdmin />
              <ProductList />
            </Route>

            <Route exact path="/admin/createproduct">
              <HeaderAdmin />
              <CreateProduct />
            </Route>
            <Route exact path="/admin/categories">
              <HeaderAdmin />
              <CategoryList />
            </Route>
            <Route exact path="/admin/createcategories">
              <HeaderAdmin />
              <CreateCategory />
            </Route>
            <Route exact path="/admin/orders">
              <HeaderAdmin />
              <OrderList />
            </Route>
            <Route exact path="/admin/order/:id">
              <HeaderAdmin />
              <OrderDetails />
            </Route>
            <Route exact path="/">
              <Header/>
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
