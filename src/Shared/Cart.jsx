import React, { useContext } from "react";
import trashIcon from "../assets/icons/trash.svg";
// function
import { shorten } from "../helpers/function";
// context
import { CartContext } from "../context/CartContextProvider";

export default function Cart(props) {
    const { dispatch } = useContext(CartContext);
    const { image, title, quantity, price } = props.data;
    return (
        <div>
            <img src={image} alt="img" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>

            <div>
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
