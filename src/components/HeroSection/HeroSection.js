import React from 'react'
import heroSectionStyle from '../HeroSection/HeroSection.module.css'
import heroSectionImage from '../../assets/images/6920933_1-removebg-preview 1.svg'
import { Link } from 'react-router-dom'

function HeroSection() {

  // const [isActive, setActive] = useState([false, false, false]);

  return (
    <div className={heroSectionStyle.heroSectionComponent}>
      
      <div className={heroSectionStyle.libraryIntro}>
          <p>Where every page is a new Adventure</p>
          <p className={heroSectionStyle.heroPara}>At the heart of our library is the belief that reading is a transformative experience. It fuels imagination, expands perspectives, and opens doors to uncharted territories. We're here to facilitate your journey, providing easy access to a universe of stories, ideas, and information.</p>
          <Link to={'./AllBooks'} className={heroSectionStyle.exploreButton} >Explore Books</Link>
      </div>

      <img src={heroSectionImage} alt='heroSection' className={heroSectionStyle.heroImage}/>

    </div>
  )
}

export default HeroSection
