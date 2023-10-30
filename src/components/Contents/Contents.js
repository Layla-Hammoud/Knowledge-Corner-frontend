import React from 'react'
import contentsStyle from '../Contents/contents.module.css'
import image1 from '../../assets/images/image 24.svg'
import image2 from '../../assets/images/image 24 (1).svg'
import image3 from '../../assets/images/image 24 (2).svg'
import image4 from '../../assets/images/image 24 (3).svg'
import image5 from '../../assets/icons/satisfaction (1) 2.svg'
import image6 from '../../assets/icons/social-media 2.svg'
import image7 from '../../assets/icons/online-library 2.svg'
import image8 from '../../assets/icons/book 2.svg'
import image9 from '../../assets/icons/authorization 2.svg'
import image10 from '../../assets/icons/checklist 2.svg'

function Contents() {
    return (
        <div className={contentsStyle.contentsComponent}>

            <h1>Millions of Books Available for you , Anytime & Anywhere</h1>
            <div className={contentsStyle.imageContainer}>
                <img src={image1} alt='image1' />
                <img src={image2} alt='image2' />
                <img src={image3} alt='image3' />
                <img src={image4} alt='image4' />
            </div>

            <h1>Services</h1>
            <div className={contentsStyle.borderComponent}>

                <div className={contentsStyle.singleBorder}>
                    <img src={image5} alt='satisfation'/>
                    <h3>User Ratings and reviews</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image6} alt='social-media'/>
                    <h3>User Recommendations</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image7} alt='online-library'/>
                    <h3>Extensive Digital Library</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image8} alt='book-2'/>
                    <h3>Educational Resources</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image9} alt='authorization'/>
                    <h3>Author Profiles</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image10} alt='check-list'/>
                    <h3>Reading Lists</h3>
                </div>

            </div>

            <h1>About Us</h1>
            <p>"Welcome to Sapiens ,  your digital gateway to a world of knowledge and imagination. At Sapiens ,  we're passionate about the written word and its power to inspire, educate, and entertain. Our mission is to make the literary universe accessible to everyone, whether you're an avid reader, a student, or someone looking to explore new literary adventures.</p>

        </div>
        
    )
}

export default Contents
