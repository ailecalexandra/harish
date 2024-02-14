import React from 'react'
import image1 from '../assets/image1.jpg'
function Card(){
  return(
    <div className='card'>
      <img src={image1} alt=''/>
      <div className='card-body'>
      <h4 className='card-title'>My title</h4>
      <p className='card-text text-secondary'>texto a rellenar</p>
      </div>

    </div>
  )
}
export default  Card