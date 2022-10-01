import React, { useContext } from "react";
// component
import Product from "../Shared/Product";
// context
import { ProductsContext } from "../context/ProductContextProvider";
export default function Store() {
    const products = useContext(ProductsContext);
    return (
        <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between"}}>
          {
            products.map((product)=> <Product key={product.id} productData={product}/>)
          }
        </div>
    );
}
