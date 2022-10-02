import React, { useContext } from "react";
import styles from "../components/Store.module.css"
// component
import Product from "../Shared/Product";
// context
import { ProductsContext } from "../context/ProductContextProvider";
export default function Store() {
    const products = useContext(ProductsContext);
    return (
        <div className={styles.container}>
          {
            products.map((product)=> <Product key={product.id} productData={product}/>)
          }
        </div>
    );
}
