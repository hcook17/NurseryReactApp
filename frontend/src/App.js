import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return ( <
        BrowserRouter >
        <
        div className = "grid-container" >
        <
        header className = "row" >
        <
        div >
        <
        a className = "brand"
        href = "/" > Nursery < /a> </div >
        <
        div >
        <
        a href = "cart.html" > CART < /a>  <
        a href = "contact.html" > CONTACT < /a>  <
        a href = "account.html" > MY ACCOUNT < /a>  <
        a href = "signin.html" > LOGIN < /a>  <
        /div>  <
        /header>  <
        main >
        <
        Routes >
        <
        Route path = "/product/:id"
        element = { < ProductScreen / > } > < /Route>   <
        Route path = "/"
        element = { < HomeScreen / > }
        exact > < /Route>   <
        /Routes>  <
        /main>  <
        footer className = "row center" > All right reserved < /footer>  <
        /div>  <
        /BrowserRouter>
    );
}

export default App;