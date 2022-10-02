import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
// component
import Cart from '../Shared/Cart'
// context
import { CartContext } from '../context/CartContextProvider'

export default function ShopCart() {

  const {state,dispatch}=useContext(CartContext)
  return (
    <div>
      <div>
      {
        state.selectedItems.map(item=><Cart key={item.id} data={item}/>)
      }
      </div>
      {
        state.itemsCounter>0 && <div>
          <p> Total Items: <span>{state.itemsCounter}</span></p>
          <p>Total Payment: <span>{state.total}</span></p>
          <div>
            <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check out</button>
            <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
          </div>
        </div>
      }
      {
        state.checkOut && <div>
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
