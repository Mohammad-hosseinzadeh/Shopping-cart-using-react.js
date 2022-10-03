import React from "react";
// components
import Store from "./components/Store";
import ProductDetails from "./Shared/ProductDetails";
import Navbar from "./Shared/Navbar";
import ShopCart from "./components/ShopCart";

import { Routes, Route,Navigate } from "react-router-dom";

// context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

export default function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar/>
                <Routes>
                    <Route path="/products/:id" element={<ProductDetails/>} />
                    <Route path="/products" element={<Store/>} />
                    <Route path="/cart" element={<ShopCart/>}/>
                    <Route to="/*" element={<Navigate to="/products"/>} />
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
}
