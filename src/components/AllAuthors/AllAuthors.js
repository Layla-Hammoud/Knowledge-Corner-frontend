import React, { useState } from "react";
import AllBooksStyle from "../AllBooks/AllBooks.module.css";
import AuthorCover from "../../assets/images/james-clear-headshot-v1-e1538685972972.jpg";
import filter from "../../assets/icons/filter.png";

let rating = 4;
const AllAuthors = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked"); // Toggle the menuOpen state
  };
  return (
    <div>
      <form className={AllBooksStyle.bookSearch}>
        <input id="search" className={AllBooksStyle.inputSearch} type="text" />
        <button for="#search" className={AllBooksStyle.searchButton}>
          search
        </button>
      </form>

      <div className={AllBooksStyle.filterCategories}>
        <input
          type="text"
          id="Categories"
          name="Categories "
          value="Search for Categories"
        />
        <button for="#Categories" onClick={handleClick}>
          <img src={filter} alt="filter" />
        </button>
      </div>
      <div className={AllBooksStyle.booksContainer}>
        <div
          // className={AllBooksStyle.booksCategory}
          className={`${AllBooksStyle.booksCategory} 
          ${menuOpen ? AllBooksStyle.open : ""}
          `}
        >
          <h2>Categories</h2>
          <div className={AllBooksStyle.bookCheckbox}>
            <input
              type="checkbox"
              id="fiction"
              name="fiction "
              value="fiction"
            />
            <label for="fiction"> fiction</label>
            <br></br>
          </div>
          <div className={AllBooksStyle.bookCheckbox}>
            <input
              type="checkbox"
              id="nonFiction"
              name="nonFiction"
              value="nonFiction"
            />
            <label for="nonFiction"> non-Fiction</label>
            <br></br>
          </div>
          <div className={AllBooksStyle.bookCheckbox}>
            <input
              type="checkbox"
              id="romance"
              name="romance"
              value="romance"
            />
            <label for="romance"> Romance</label>
            <br></br>
          </div>
        </div>
        <div className={AllBooksStyle.booksList}>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <figure className={AllBooksStyle.figure}>
            <img
              src={AuthorCover}
              alt="Book cover"
              className={AllBooksStyle.image}
            />
            <figcaption className={AllBooksStyle.figcaption}>
              <p>
                <strong>Memory</strong>
              </p>
              <p>Hana Hope</p>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${rating >= star ? AllBooksStyle.filled : ""}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
