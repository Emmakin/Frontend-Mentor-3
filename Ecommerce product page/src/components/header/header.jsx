import {React,useState} from 'react'
import Logo from '../image/logo.svg'
import './header.css'
import Cart from '../image/icon-cart.svg'
import Avatar from '../image/image-avatar.png'
import Bar from '../image/icon-menu.svg'
import Close from '../image/icon-close.svg'


function Header() {
  const [toggle, setToggle]= useState(false)

  return (
    <div className='wrapper'>
      <img className= "bar" src={toggle ? Close : Bar} onClick={()=>{setToggle(!toggle)}}/>
      {toggle &&
        <ul className='respDiv'>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>}
      <div className='tab-C'>
        <div><img src={Logo} alt='The picture of the Logo'/></div>
        <ul>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='headIcons'>
        <img src={Cart} />
        <img className='imgP' src={Avatar} />
      </div>
    </div>
  )
}

export default Header