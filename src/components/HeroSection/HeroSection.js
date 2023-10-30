import React from 'react'
import heroSectionStyle from '../HeroSection/HeroSection.module.css'
import heroSectionImage from '../../assets/images/6920933_1-removebg-preview 1.svg'

function HeroSection() {
  return (
    <div className={heroSectionStyle.heroSectionComponent}>
      
      <div className={heroSectionStyle.libraryIntro}>
          <p>Where every page is a new Adventure</p>
          <p>At the heart of our library is the belief that reading is a transformative experience. It fuels imagination, expands perspectives, and opens doors to uncharted territories. We're here to facilitate your journey, providing easy access to a universe of stories, ideas, and information.</p>
          <button className={heroSectionStyle.exploreButton}>Explore Books</button>
      </div>

      <img src={heroSectionImage} alt='heroSection' className={heroSectionStyle.heroImage}/>

    </div>
  )
}

export default HeroSection
