import {React, useState} from 'react'
import Cart from '../image/icon-cart2.svg'
import './body.css'
import Picture1 from '../image/image-product-1.jpg'
import Thumbnail1 from '../image/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../image/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../image/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../image/image-product-4-thumbnail.jpg'
import Next from '../image/icon-next.svg'
import Prev from '../image/icon-previous.svg'






function Body() {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(0);

  let imgs = [Picture1,Thumbnail2,Thumbnail3,Thumbnail1]



  return (
    <div className='wrapperB'>
        <div className="wrap-P">
            <img src={imgs[modal]} alt="This a picture of a shoe"/>
            <div className='modalW'>
                <button className="left" onClick={()=>{
                  modal <= 0 ? setModal(3): setModal(modal-1)
                }}><img src={Prev} alt="The picture of a left arrow"/></button>
                <button className="right" 
                onClick={()=>{
                  modal >= imgs.length-1 ? setModal(0) : setModal(modal + 1)
                }}><img src={Next} alt="The icon of a right arrow"/></button>
            </div>
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
              These low-profile sneakers are your perfect casual wear
              companion. Featuring a durable rubber outer sole, they'll 
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
                 count === 0 ? setCount(count): setCount(count - 1)
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