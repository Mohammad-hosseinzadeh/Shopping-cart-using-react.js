import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from "./ShopCart.module.css"
// component
import Cart from '../Shared/Cart'
// context
import { CartContext } from '../context/CartContextProvider'

export default function ShopCart() {

  const {state,dispatch}=useContext(CartContext)
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
      {
        state.selectedItems.map(item=><Cart key={item.id} data={item}/>)
      }
      </div>
      {
        state.itemsCounter>0 && <div className={styles.payments}>
          <p> Total Items: <span>{state.itemsCounter}</span></p>
          <p>Total Payment: <span>{state.total} $</span></p>
          <div className={styles.buttonContainer}>
            <button className={styles.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>Check out</button>
            <button className={styles.clear} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
          </div>
        </div>
      }
      {
        state.checkOut && <div className={styles.complete}>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      }
      {
        !state.checkOut && state.itemsCounter===0&& <div>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go Back to Shop</Link>
        </div>
      }
    </div>
  )
}
