import React, { useState, useEffect } from "react";
import AllBooksStyle from "../AllBooks/AllBooks.module.css";
import filter from "../../assets/icons/filter.png";
import axios from "axios";
import magnifire from "../../assets/icons/magnifire.jpeg";
import TemAuthorCard from "./TemAuthorCard";
import { Link } from "react-router-dom";
const AllAuthors = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked"); // Toggle the menuOpen state
  };

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/authors")
      .then((res) => {
        // console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const filterAuthorsByName = (authorsToFilter, searchInput) => {
    if (searchInput) {
      return authorsToFilter.filter(
        (author) =>
          author.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
          author.lastName.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    return authorsToFilter;
  };
  const authorsFiltred = filterAuthorsByName(authors, searchInput);
  return (
    <div>
      <form className={AllBooksStyle.bookSearch}>
        <input
          id="search"
          className={AllBooksStyle.inputSearch}
          type="text"
          placeholder="Search For Books"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="button" className={AllBooksStyle.searchButton}>
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
      <div>
        {/* <div
          // className={AllBooksStyle.booksCategory}
          className={`${AllBooksStyle.booksCategory} 
          ${menuOpen ? AllBooksStyle.open : ""}
          `}
        ></div> */}
        <div className={AllBooksStyle.booksList}>
          {authorsFiltred.map((author) => {
            return(
            <Link to="/SingleAuthor" state={{ author: author }}>
            <TemAuthorCard
              authorName={`${author.firstName} ${author.lastName} `}
              image={author.image}
              rating={author.rating}
            />
            </Link>)
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
