import React from 'react'

export default function Product({productData}) {
  return (
    <div>
        <img src={productData.image} alt={productData.title} style={{width:"250px"}}/>
        <h3>{productData.title}</h3>
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
