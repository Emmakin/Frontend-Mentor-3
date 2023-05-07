import React from 'react'
import './cart.css'
import Thumbnail1 from '../image/image-product-1-thumbnail.jpg'

function  Cart() {
  return (
    <div>
        <span>Cart</span>
        <div>
            <img src={Thumbnail1} />
            <div>
                <span>Fall Limited Edition Sneakers</span>
            </div>
        </div>
        <button>Checkout</button>
    </div>
  )
}

export default Cart