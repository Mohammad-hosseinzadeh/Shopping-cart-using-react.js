import React, { useContext } from "react";
import styles from "./Cart.module.css"
import trashIcon from "../assets/icons/trash.svg";
// function
import { shorten } from "../helpers/function";
// context
import { CartContext } from "../context/CartContextProvider";

export default function Cart(props) {
    const { dispatch } = useContext(CartContext);
    const { image, title, quantity, price } = props.data;
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="img" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
              {
                quantity > 1 ?
                <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>
                :
                <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trashIcon} alt="trash-icon" style={{width:"20px"}}/></button>
              }
              <button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
             </div>
        </div>
    );
}
