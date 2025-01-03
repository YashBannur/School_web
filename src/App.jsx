import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
      <Programs />

      <About />

      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus />

      <Title subTitle='TESTIMONIALS' title='What a Student Says'/>
      <Testimonials />
      <Title subTitle='Contact US' title='Get In Touch'/>
      <Contact />
      <Footer />
      </div>

    </div>
  )
}

export default App