import React, { useState, useEffect } from 'react'
import contentsStyle from '../Contents/contents.module.css'
import image5 from '../../assets/icons/satisfaction (1) 2.svg'
import image6 from '../../assets/icons/social-media 2.svg'
import image7 from '../../assets/icons/online-library 2.svg'
import image8 from '../../assets/icons/book 2.svg'
import image9 from '../../assets/icons/authorization 2.svg'
import image10 from '../../assets/icons/checklist 2.svg'
import axios from 'axios';


function Contents() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/api/books/');
                // console.log(response.data);
                setBook(response.data.slice(0, 4))
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData(); // Call the fetchData function here
    }, []);

    return (
        <div className={contentsStyle.contentsComponent}>

            <h1>Millions of Books Available for you , Anytime & Anywhere</h1>
            <div className={contentsStyle.imageContainer}>

                {book.map((item, id) => (
                    <div key={id} className={contentsStyle.bookContainer}>
                        <button className={contentsStyle.imageButton}>
                            <img src={`http://localhost:4000/${item.image}`} alt={item.image} className={contentsStyle.imageBook} />
                        </button>
                        <h4 className={contentsStyle.titleBook}>{item.title}</h4>
                    </div>
                ))}

            </div>

            <h1>Services</h1>
            <div className={contentsStyle.borderComponent}>

                <div className={contentsStyle.singleBorder}>
                    <img src={image5} alt='satisfation' />
                    <h3>User Ratings and reviews</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image6} alt='social-media' />
                    <h3>User Recommendations</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image7} alt='online-library' />
                    <h3>Extensive Digital Library</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image8} alt='book-2' />
                    <h3>Educational Resources</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image9} alt='authorization' />
                    <h3>Author Profiles</h3>
                </div>

                <div className={contentsStyle.singleBorder}>
                    <img src={image10} alt='check-list' />
                    <h3>Reading Lists</h3>
                </div>

            </div>

            <h1 className={contentsStyle.abouttt}>About Us</h1>
            <p>"Welcome to Sapiens ,  your digital gateway to a world of knowledge and imagination. At Sapiens ,  we're passionate about the written word and its power to inspire, educate, and entertain. Our mission is to make the literary universe accessible to everyone, whether you're an avid reader, a student, or someone looking to explore new literary adventures.</p>

        </div>

    )
}

export default Contents
