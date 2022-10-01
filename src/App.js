import React from "react";
// components
import Store from "./components/Store";

// context
import ProductContextProvider from "./context/ProductContextProvider";

export default function App() {
    return(
     <ProductContextProvider>
        <Store/>
     </ProductContextProvider>
    );
}
