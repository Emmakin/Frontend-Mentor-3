import React from 'react'
import './body.css'
import Picture1 from '../image/image-product-1.jpg'
import Thumbnail1 from '../image/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../image/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../image/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../image/image-product-4-thumbnail.jpg'

function Body() {
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
        <div></div>
    </div>
  )
}

export default Body