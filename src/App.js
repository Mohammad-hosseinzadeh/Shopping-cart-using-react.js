import React from "react";
// components
import Store from "./components/Store";
import ProductDetails from "./Shared/ProductDetails";

import { Switch,Route,Redirect } from "react-router-dom";


// context
import ProductContextProvider from "./context/ProductContextProvider";

export default function App() {
    return(
     <ProductContextProvider>
        <Switch>
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/" component={Store}/>
            <Redirect to="/products"/>
        </Switch>
        
     </ProductContextProvider>
    );
}
