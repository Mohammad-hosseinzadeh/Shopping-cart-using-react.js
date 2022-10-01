import React,{useContext} from 'react';
// component
import Product from '../Shared/Product';
// context
import { ProductsContext } from '../context/ProductContextProvider'
export default function Store() {
    const products=useContext(ProductsContext)
  return (
    <div>
        {
            products.map(product=><Product key={product.id} productData={product}/>)
        }
    </div>
  )
}
