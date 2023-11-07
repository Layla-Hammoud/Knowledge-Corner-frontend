import React, { useState, useEffect } from "react";
import contentsStyle from "../Contents/contents.module.css";
import image5 from "../../assets/icons/satisfaction (4).png";
import image6 from "../../assets/icons/good (1).png";
import image7 from "../../assets/icons/online-library (1).png";
import image8 from "../../assets/icons/digital-library.png";
import image9 from "../../assets/icons/key-person.png";
import image10 from "../../assets/icons/library.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Contents() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/books/limitedBooks?limit=6"
        );
        // console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.error("Error:", error);
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
            {/* <Link to={'/SingleBook'}> */}
            <Link
              to="/SingleBook"
              state= {{ book: item }}
            >
              <button className={contentsStyle.imageButton}>
                <img
                  src={`http://localhost:4000/images/${item.image}`}
                  alt={item.image}
                  className={contentsStyle.imageBook}
                />
                <h4 className={contentsStyle.titleBook}>{item.title}</h4>
              </button>
            </Link>
          </div>
        ))}
      </div>

      <h1>Services</h1>
      <div className={contentsStyle.borderComponent}>
        <div className={contentsStyle.singleBorder}>
          <img src={image5} alt="satisfation" />
          <h3>User Ratings and reviews</h3>
          <p>
            Discover what other users are saying about our services and share
            your own experiences.
          </p>
        </div>

        <div className={contentsStyle.singleBorder}>
          <img src={image6} alt="social-media" />
          <h3>User Recommendations</h3>
          <p>
            Explore personalized recommendations from our community to enhance
            your experience.
          </p>
        </div>

        <div className={contentsStyle.singleBorder}>
          <img src={image7} alt="online-library" />
          <h3>Extensive Digital Library</h3>
          <p>
            Gain access to a vast online library with a wealth of digital
            resources at your fingertips.
          </p>
        </div>

        <div className={contentsStyle.singleBorder}>
          <img src={image8} alt="book-2" />
          <h3>Educational Resources</h3>
          <p>
            Access a wide range of educational materials and tools to support
            your learning journey.
          </p>
        </div>

        <div className={contentsStyle.singleBorder}>
          <img src={image9} alt="authorization" />
          <h3>Author Profiles</h3>
          <p>
            Dive into the profiles of talented authors and get to know the
            creative minds behind your favorite books.
          </p>
        </div>

        <div className={contentsStyle.singleBorder}>
          <img src={image10} alt="check-list" />
          <h3>Reading Lists</h3>
          <p>
            Create and explore reading lists to help you organize and discover
            new books tailored to your interests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contents;
