import React from "react";
// components
import Store from "./components/Store";
import ProductDetails from "./Shared/ProductDetails";
import Navbar from "./Shared/Navbar";
import ShopCart from "./components/ShopCart";

import { Switch, Route, Redirect } from "react-router-dom";

// context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

export default function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar/>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/products" component={Store} />
                    <Route path="/cart" component={ShopCart}/>
                    <Redirect to="/products" />
                </Switch>
            </CartContextProvider>
        </ProductContextProvider>
    );
}
