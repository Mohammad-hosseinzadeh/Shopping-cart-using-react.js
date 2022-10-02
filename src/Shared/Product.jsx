import React,{useContext} from 'react'
import trashIcon from "../assets/icons/trash.svg"
import styles from "../Shared/Product.module.css"

// function
import { isInCart, shorten,quantityCount } from '../helpers/function'
import { Link } from 'react-router-dom'

// context
import { CartContext } from '../context/CartContextProvider'

export default function Product({productData}) {
  const {state,dispatch}=useContext(CartContext)
  return (
    <div className={styles.container}>
        <img src={productData.image} alt={productData.title} className={styles.cardImage}/>
        <h3>{shorten(productData.title)}</h3>
        <p>{`${productData.price}$`}</p>
        <div className={styles.linkContainer}>
            <Link to={`/products/${productData.id}`}>Detailes</Link>
            <div className={styles.buttonContainer}>
              {
               quantityCount(state,productData.id)>1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>
              }
              {
               quantityCount(state,productData.id)===1&&<button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}><img src={trashIcon} alt="trash-icon" style={{width:"20px"}}/></button>
              }
              {
                 quantityCount(state,productData.id)>0&&<span className={styles.counter}>{ quantityCount(state,productData.id)}</span>
              }
               {
                isInCart(state,productData.id) ? <button className={styles.smallButton} onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>:<button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add to cart</button>
               }
            </div>
        </div>
    </div>
  )
}
