import React from 'react'
// function
import { shorten } from '../helpers/function'

export default function Product({productData}) {
  return (
    <div>
        <img src={productData.image} alt={productData.title} style={{width:"250px"}}/>
        <h3>{shorten(productData.title)}</h3>
        <p>price:{productData.price}</p>
        <div>
            <a href='#'>Detailes</a>
            <div>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}
