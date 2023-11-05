import React, { useState, useEffect } from "react";
import AllBooksStyle from "../AllBooks/AllBooks.module.css";
import filter from "../../assets/icons/filter.png";
import axios from "axios";
import magnifire from "../../assets/icons/magnifire.jpeg";
import TemAuthorCard from "./TemAuthorCard";
const AllAuthors = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked"); // Toggle the menuOpen state
  };

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <form className={AllBooksStyle.bookSearch}>
        <input
          id="search"
          className={AllBooksStyle.inputSearch}
          type="text"
          placeholder="Search For Books"
        />
        <button for="#search" className={AllBooksStyle.searchButton}>
          <img src={magnifire} alt="search img" width="25" height="20" />
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
          {authors.map((author) => (
            <TemAuthorCard
              authorName={`${author.firstName} ${author.lastName} `}
              image={author.image}
              rating={author.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
