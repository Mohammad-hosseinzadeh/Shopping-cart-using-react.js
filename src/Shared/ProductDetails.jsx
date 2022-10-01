import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

// context
import { ProductsContext } from '../context/ProductContextProvider';

export default function ProductDetails(props) {
    const id =props.match.params.id;
    const data=useContext(ProductsContext);
    const product=data[id-1];
    const {image,title,description,price,category}=product;
  return (
    <div>
        <img src={image} alt={title}/>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>Category:</span> {category}</p>
            <div>
                <span>{price} $</span>
                <Link to="/products">Back to shop</Link>
            </div>
        </div>
    </div>
  )
}
