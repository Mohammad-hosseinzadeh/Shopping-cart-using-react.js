import React, { useState, useEffect,createContext } from "react";
// API
import { getProducts } from "../services/api";

// create ProductsContext to share products data information with other components 
 export const ProductsContext=createContext(); 

export default function ProductContextProvider({children}) {
    // set products data 
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // get products data when component mount
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };
        fetchAPI();
    }, []);


    return(
        <ProductsContext value={products}>
           {children}
        </ProductsContext>
    );
}
