import React,{useContext} from 'react';
import shopIcon from "../assets/icons/shop.svg"
import {Link} from 'react-router-dom'

// context
import { CartContext } from '../context/CartContextProvider';

export default function Navbar() {
    const {state}=useContext(CartContext)
  return (
    <div>
        <div>
            <Link to="/products">products</Link>
            <div>
                <Link to="/cart"><img src={shopIcon} alt="shop-icon"/></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    </div>
  )
}
