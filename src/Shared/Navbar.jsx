import React,{useContext} from 'react';
import shopIcon from "../assets/icons/shop.svg"
import {Link} from 'react-router-dom'
import styles from "./Navbar.module.css"
// context
import { CartContext } from '../context/CartContextProvider';

export default function Navbar() {
    const {state}=useContext(CartContext)
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link to="/products" className={styles.productLink}>products</Link>
            <div className={styles.iconContainer}>
                <Link to="/cart"><img src={shopIcon} alt="shop-icon"/></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    </div>
  )
}
