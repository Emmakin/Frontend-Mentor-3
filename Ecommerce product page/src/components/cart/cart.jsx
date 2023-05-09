import React from 'react'
import './cart.css'
import Thumbnail1 from '../image/image-product-1-thumbnail.jpg'

function  Cart() {
  return (
    <div className='cartWrapper'>
        <span>Cart</span>
        <div className='cartB'>
            <img className="cartImg"src={Thumbnail1} />
            <div className='cartT'>
                <span>Fall Limited Edition Sneakers</span>
                <span>Fall Limited Edition Sneakers</span>
            </div>
        </div>
        <button>Checkout</button>
    </div>
  )
}

export default Cart