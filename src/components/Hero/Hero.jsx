import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
            <h1>we ensure better education for a better wolrd</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem quisquam alias veritatis quae. Porro, illo! Eaque nobis tempore quibusdam.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero