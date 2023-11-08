import React, { useState, useEffect } from "react";
import AllBooksStyle from "../AllBooks/AllBooks.module.css";
import filter from "../../assets/icons/filter.png";
import axios from "axios";
import magnifire from "../../assets/icons/magnifire.jpeg";
import TemAuthorCard from "./TemAuthorCard";
const AllAuthors = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setIsLoading(false);
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
      <h1 className={AllBooksStyle.titleh1}>Authors List</h1>
      <form className={AllBooksStyle.bookSearch}>
        <input
          id="search"
          className={AllBooksStyle.inputSearch}
          type="text"
          placeholder="Search For Author Name"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="button" className={AllBooksStyle.searchButton}>
          <img src={magnifire} alt="search img" width="25" height="20" />
        </button>
      </form>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
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
              {authorsFiltred.map((author) => (
                <TemAuthorCard
                  authorName={`${author.firstName} ${author.lastName} `}
                  image={author.image}
                  rating={author.rating}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllAuthors;
