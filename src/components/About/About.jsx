import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (

    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />

        </div>


        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tommorow's Leaders Today</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere magnam provident ducimus, vitae earum officiis eius temporibus obcaecati molestias modi ratione esse tempore. Adipisci itaque voluptatibus ex in soluta voluptas natus atque voluptatum deserunt dolor, quia magni, .</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, aspernatur veritatis tempora quibusdam voluptatum commodi quasi aliquid cum id esse. Libero, cum maiores? At harum minus </p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eius impedit. Accusantium eum sed autem repellat, aspernatur adipisci dolorum unde. Consequatur sunt iste earum laudantium.</p>
        </div>

    </div>
  )
}

export default About