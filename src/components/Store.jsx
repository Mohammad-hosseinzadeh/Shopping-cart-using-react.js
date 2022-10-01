import React,{useContext} from 'react'
// context
import { ProductsContext } from '../context/ProductContextProvider'
export default function Store() {
    const products=useContext(ProductsContext)
  return (
    <div>Store</div>
  )
}
