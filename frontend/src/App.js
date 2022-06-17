import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import ContactScreen from "./screens/ContactScreen";
import CategoryScreen from "./screens/CategoryScreen";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import { Store } from './Store';
import CartScreen from "./screens/CartScreen";
import { useContext } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import Badge from "react-bootstrap/esm/Badge";
import SigninScreen from "./screens/SigninScreen";

export default function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  
  return (
    <BrowserRouter basename="/home">
      <header>
        <nav className="me-auto">
          <Logo />
          <Shop />
          <div className='options'><Contact /> </div>
          <div className='options'>ACCOUNT</div>
          <div className='options'>LOGIN</div>
          <Link to="/cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} size="xl" />
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.length}
              </Badge>
            )}
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path="/products/:category" element={<CategoryScreen />} /> 
        <Route path="/products/:category/:slug" element={<ProductScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path='/Contact' element={<ContactScreen/>} />
      </Routes>
    </BrowserRouter>
  )
  }
