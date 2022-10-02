import React,{useContext} from 'react'
import trashIcon from "../assets/icons/trash.svg"

// function
import { isInCart, shorten,quantityCount } from '../helpers/function'
import { Link } from 'react-router-dom'

// context
import { CartContext } from '../context/CartContextProvider'

export default function Product({productData}) {
  const {state,dispatch}=useContext(CartContext)
  return (
    <div>
        <img src={productData.image} alt={productData.title} style={{width:"250px"}}/>
        <h3>{shorten(productData.title)}</h3>
        <p>price:{productData.price}</p>
        <div>
            <Link to={`/products/${productData.id}`}>Detailes</Link>
            <div>
              {
               quantityCount(state,productData.id)>1 && <button onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>
              }
              {
               quantityCount(state,productData.id)===1&&<button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={trashIcon} alt="trash-icon" style={{width:"20px"}}/></button>
              }
               {
                isInCart(state,productData.id) ? <button onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>:<button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add to cart</button>
               }
            </div>
        </div>
    </div>
  )
}
