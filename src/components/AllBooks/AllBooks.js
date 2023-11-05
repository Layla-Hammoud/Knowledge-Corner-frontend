// import React, { useState, useEffect } from "react";
// import AllBooksStyle from "./AllBooks.module.css";
// import filter from "../../assets/icons/filter.png";
// import axios from "axios";
// import magnifire from "../../assets/icons/magnifire.jpeg";
// import TempBookCard from "../BookCard/tempBookCard";

// const AllBooks = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleClick = () => {
//     setMenuOpen(!menuOpen);
//     console.log("clicked"); // Toggle the menuOpen state
//   };

//   //fetch data get all books using axios
//   const [books, setBooks] = useState([]);
//   const [authors, setAuthors] = useState({});
//   const [categories, setCategories] = useState([]);
//   const [checkboxes, setCheckboxes] = useState({});
//   const [checkboxKey, setCheckboxKey] = useState(0); // Add this line
//   const [checkedState, setCheckedState] = useState(
//     new Array(categories.length).fill(false)
//   );
//   useEffect(() => {
//     // Fetch the list of categories from the backend
//     axios
//       .get("http://localhost:4000/api/categories")
//       .then((response) => {
//         console.log(response.data);
//         setCategories(response.data);
//         // Initialize the checkboxes state with each category and set them all initially unchecked
//         const initialCheckboxes = {};
//         response.data.forEach((category) => {
//           initialCheckboxes[category._id] = false;
//           console.log(categories.length);
//         });
//         setCheckboxes(initialCheckboxes);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });

//     axios
//       .get("http://localhost:4000/api/books")
//       .then((res) => {
//         console.log(res.data);
//         setBooks(res.data);
//         // Extract author IDs from books and fetch author names
//         const authorIds = res.data.map((book) => book.authorId);
//         fetchAuthors(authorIds);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // Function to fetch author names based on authorIds
//   const fetchAuthors = (authorIds) => {
//     // Make an API call to fetch author names based on authorIds
//     // Replace 'yourAuthorAPIEndpoint' with the actual endpoint to fetch authors
//     axios
//       .get("http://localhost:4000/api/authors", {
//         params: { authorIds: authorIds },
//       })
//       .then((res) => {
//         // Create a mapping of authorId to author name
//         const authorMap = {};
//         res.data.forEach((author) => {
//           authorMap[author._id] = author.firstName;
//         });
//         setAuthors(authorMap);
//       })
//       .catch((err) => console.log(err));
//   };

//   const [isChecked, setIsChecked] = useState(false);

//   const handleOnChange = (e) => {
//     const checkboxName = e.target.name;
//     const isChecked = e.target.checked;

//     console.log("Checkbox Name:", checkboxName);
//     console.log("Is Checked:", isChecked);
//     setIsChecked(!isChecked);
//   };
//   // const handleCheckboxChange = (e) => {
//   //   const checkboxName = e.target.name;
//   //   const isChecked = e.target.checked;

//   //   console.log("Checkbox Name:", checkboxName);
//   //   console.log("Is Checked:", isChecked);
//   //   setCheckboxes((prevCheckboxes) => ({
//   //     ...prevCheckboxes,
//   //     [checkboxName]: isChecked,
//   //   }));

//   // Perform searches or other actions based on checkbox changes
//   // Increment the checkboxKey to trigger a re-render
//   // setCheckboxKey((prevKey) => prevKey + 1);
//   // };

//   return (
//     <div>
//       <form className={AllBooksStyle.bookSearch}>
//         <input
//           id="search"
//           className={AllBooksStyle.inputSearch}
//           type="text"
//           placeholder="Search For Books"
//         />
//         <button for="#search" className={AllBooksStyle.searchButton}>
//           <img src={magnifire} alt="search img" width="25" height="20" />
//         </button>
//       </form>

//       <div className={AllBooksStyle.filterCategories}>
//         <input
//           type="text"
//           id="Categories"
//           name="Categories"
//           value="Search for Categories"
//         />
//         <button for="#Categories" onClick={handleClick}>
//           <img src={filter} alt="filter" />
//         </button>
//       </div>

//       <div className={AllBooksStyle.booksContainer}>
//         <div
//           className={`${AllBooksStyle.booksCategory} ${
//             menuOpen ? AllBooksStyle.open : ""
//           }`}
//         >
//           <h2>Categories</h2>
//           {categories.map((category, index) => (
//             <div className={AllBooksStyle.bookCheckbox} key={index}>
//               <input
//                 type="checkbox"
//                 id={category._id}
//                 name={category.name}
//                 value={category._id}
//                 checked={isChecked}
//                 onChange={handleOnChange}
//                 // key={checkboxKey}
//               />
//               <label htmlFor={category._id}>{category.name}</label>
//               <br />
//             </div>
//           ))}
//         </div>

//         <div className={AllBooksStyle.booksList}>
//           {books.map((book) => (
//             <TempBookCard
//               image={book.image}
//               author={authors[book.authorId]}
//               bookTitle={book.title}
//               rating={book.rating}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AllBooks;

import React, { useState, useEffect } from "react";
import AllBooksStyle from "./AllBooks.module.css";
import filter from "../../assets/icons/filter.png";
import axios from "axios";
import magnifire from "../../assets/icons/magnifire.jpeg";
import TempBookCard from "../BookCard/tempBookCard";

const AllBooks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});
  const [categoriesMap, setCategoriesMap] = useState({});

  // this function for categories list appear onClick , in responsive desihne
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  };

  //get all categories to appear in list of checkbox
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
        const initialCheckboxes = {};
        response.data.forEach((category) => {
          initialCheckboxes[category._id] = false;
        });
        setCheckboxes(initialCheckboxes);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // 1- fetch all books in the page
    // 2- i have to fetch the name of the author , depend on that i have just the id of author in book modle
    axios
      .get("http://localhost:4000/api/books")
      .then((res) => {
        // fetch all books in the page
        setBooks(res.data);
        console.log(res.data);
        const authorIds = res.data.map((book) => book.authorId);
        fetchAuthors(authorIds);

        const categIds = res.data.map((book) => book.categoryId);
        fetchcateg(categIds);
      })
      .catch((err) => console.log(err));
  }, []);
  // fetch the name of autor depend on authorID in books
  const fetchAuthors = (authorIds) => {
    axios
      .get("http://localhost:4000/api/authors", {
        params: { authorIds: authorIds },
      })
      .then((res) => {
        const authorMap = {};

        res.data.forEach((author) => {
          authorMap[author._id] = `${author.firstName} ${author.lastName}`;
        });
        setAuthors(authorMap);
        console.log(authorMap);
      })
      .catch((err) => console.log(err));
  };
  // fetch the category name depend categoryID in books
  const fetchcateg = (categIds) => {
    axios
      .get("http://localhost:4000/api/categories", {
        params: { categIds: categIds },
      })
      .then((res) => {
        const categMap = {};

        res.data.forEach((category) => {
          categMap[category._id] = `${category.name}`;
        });
        setCategoriesMap(categMap);
        console.log(categMap);
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    const categoryId = e.target.value; // provide the value of checkbox
    const isChecked = e.target.checked; //it return the state of checkbox wether checked or not

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [categoryId]: isChecked,
    }));

    if (isChecked) {
      setSelectedCategories((prevSelected) => [...prevSelected, categoryId]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((id) => id !== categoryId)
      );
    }
  };

  const filterBooksByCategories = () => {
    if (selectedCategories.length === 0) {
      return books;
    } else {
      return books.filter((book) =>
        selectedCategories.includes(book.categoryId)
      );
    }
  };

  const filteredBooks = filterBooksByCategories();

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
          name="Categories"
          value="Search for Categories"
        />
        <button for="#Categories" onClick={handleClick}>
          <img src={filter} alt="filter" />
        </button>
      </div>

      <div className={AllBooksStyle.booksContainer}>
        <div
          className={`${AllBooksStyle.booksCategory} ${
            menuOpen ? AllBooksStyle.open : ""
          }`}
        >
          <h2>Categories</h2>
          {categories.map((category, index) => (
            <div className={AllBooksStyle.bookCheckbox} key={index}>
              <input
                type="checkbox"
                id={category._id}
                name={category.name}
                value={category._id}
                checked={checkboxes[category._id] || false}
                onChange={handleOnChange}
              />
              <label htmlFor={category._id}>{category.name}</label>
              <br />
            </div>
          ))}
        </div>

        <div className={AllBooksStyle.booksList}>
          {filteredBooks.map((book) => (
            <TempBookCard
              image={book.image}
              author={authors[book.authorId]}
              bookTitle={book.title}
              rating={book.rating}
              category={categoriesMap[book.categoryId]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
