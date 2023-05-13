import React from 'react'
import './modalB.css'
import Next from '../image/icon-next.svg'
import Prev from '../image/icon-previous.svg'

function ModalB() {
  return (
    <div className='modalW'>
        <button className="right"><Next /></button>
        <button className="left"><Prev /></button>
    </div>
  )
}

export default ModalB