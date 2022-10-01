import React from 'react'
// function
import { shorten } from '../helpers/function'
import { Link } from 'react-router-dom'

export default function Product({productData}) {
  return (
    <div>
        <img src={productData.image} alt={productData.title} style={{width:"250px"}}/>
        <h3>{shorten(productData.title)}</h3>
        <p>price:{productData.price}</p>
        <div>
            <Link to={`/products/${productData.id}`}>Detailes</Link>
            <div>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}
