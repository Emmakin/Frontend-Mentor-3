import {React, useState} from 'react'
import Cart from '../image/icon-cart2.svg'
import './body.css'
import Picture1 from '../image/image-product-1.jpg'
import Thumbnail1 from '../image/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../image/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../image/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../image/image-product-4-thumbnail.jpg'






function Body() {
  const [count, setCount] = useState(0);

  return (
    <div className='wrapperB'>
        <div className="wrap-P">
            <img src={Picture1} alt="This a picture of a shoe"/>
            <ul className='thumbP'>
                <li><img src={Thumbnail1} alt= "The thumbnail for the frontview of the pic" /></li>
                <li><img src={Thumbnail2} alt= "The thumbnail for the rightview of the pic" /></li>
                <li><img src={Thumbnail3} alt= "The thumbnail for the leftview of the pic" /></li>
                <li><img src={Thumbnail4} alt= "The thumbnail for the backview of the pic" /></li>
            </ul>
        </div>
        <div className='textW'>
          <span><h5>SNEAKER COMPANY</h5></span>
          <h1><strong>Fall Limited Edition Sneakers</strong></h1>
          <span>
              These low-profile sneakers are your perfect casual wear <br />
              companion. Featuring a durable rubber outer sole, they'll <br />
              withsand everything the weather can offer.
          </span>
          <div className='priceD'>
            <span><h3>$125.00</h3></span>
            <label>50%</label>
          </div>
          <span className='oldPrice'>$250.00</span>
          <div className='lastButtons'>
            <span className='numB'>
              <button onClick={()=> {
                if (count <= 0) {
                  count = 0
                }
                setCount(count - 1)
                }}>-
              </button>
              <label>{count}</label>
              <button 
                onClick={()=>{
                  setCount(count + 1)}}
                >+
              </button>
            </span>
            <span className='addToCart'>
              <button>
                <img src={Cart} alt='The icon of the cart'/> 
                <span>Add to cart</span>
              </button>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Body