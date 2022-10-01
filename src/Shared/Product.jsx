import React from 'react'

export default function Product({productData}) {
  return (
    <div>
        <img alt="img"/>
        <h3>{productData.title}</h3>
        <p>price</p>
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
