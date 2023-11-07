import style from "./AddEditBookForm.module.css";
import { useState, useEffect } from "react";
import { useParams, useLocation,Link } from 'react-router-dom';
import axios from "axios";
function AddEditBookForm() {
  const [optionCategory, setOptionCategory] = useState(null);
  const [authors, setAuthors] = useState(null);
  const location = useLocation();
  const book = location.state && location.state.book;

  const { type } = useParams();

  const resetForm = () => {
    const form = document.getElementById("bookForm");
    form.reset();
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  const addBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    for (const [name, value] of formData.entries()) {
      formDataObject[name] = value;
    }
    if (type === "Add") {
      axios
        .post("http://localhost:4000/api/books", formData)
        .then((response) => {
          console.log("Request was successful:", response.data);
          resetForm();
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
        });
    } else if (type === "Edit") {
      const image = formData.get("image");
      if (image.size === 0) {
        delete formDataObject.image;
      }
      axios
        .patch(`http://localhost:4000/api/books/${book._id}`, formDataObject)
        .then((response) => {
          console.log("Request was successful:", response.data);
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
        });
    }
  };

  function fetchAuthorData() {
    axios
      .get("http://localhost:4000/api/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error("Error in fetching:", error);
      });
  }

  function fetchCategoryData() {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => {
        setOptionCategory(response.data);
      })
      .catch((error) => {
        console.error("Error in fetching:", error);
      });
  }
  useEffect(() => {
    fetchAuthorData();
    fetchCategoryData();
  }, []);
  return (
    <>
      <div className={style.fromContainer}>
        <form className={style.bookform} id="bookForm" onSubmit={addBook}>
          <h1 className={style.title}>
            {type === "Add" ? "Launch Book" : "Edit Book"}
          </h1>
          <div className={style.inputContainer}>
            <label className={style.label}>Title</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter Title"
              name="title"
              defaultValue={type === "Edit" ? book.title : ""}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label>Pages</label>
            <input
              className={style.input}
              type="number"
              placeholder="Enter the pages"
              name="nbPages"
              defaultValue={type === "Edit" ? book.nbPages : ""}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Publication's date</label>
            <input
              className={style.input}
              type="date"
              placeholder="Enter the date"
              name="publicationDate"
              defaultValue={
                type === "Edit" ? formatDate(book.publicationDate) : ""
              }
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>ISBN</label>
            <input
              className={style.input}
              type="string"
              placeholder="Enter the ISBN"
              name="ISBN"
              defaultValue={type === "Edit" ? book.ISBN : ""}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Description</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter the description"
              name="description"
              defaultValue={type === "Edit" ? book.description : ""}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>rating</label>
            <input
              className={style.input}
              type="number"
              placeholder="Enter the rating"
              name="rating"
              defaultValue={type === "Edit" ? book.rating : ""}
              max={5}
              min={1}
              required
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Select an Author:</label>
            <select
              name="authorId"
              defaultValue={type === "Edit" ? book._id : ""}
              required
            >
              {authors &&
                authors.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.firstName} {option.lastName}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Select a Category:</label>
            <select
              name="categoryId"
              defaultValue={type === "Edit" ? book.categoryId : ""}
              required
            >
              {optionCategory &&
                optionCategory.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Language</label>
            <select
              name="language"
              defaultValue={type === "Edit" ? book.language : ""}
              required
            >
              <option>English</option>
              <option>French</option>
              <option>Arabic</option>
            </select>
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Enter an image</label>
            <input
              className={style.input}
              type="file"
              name="image"
              required={type === "Add"}
            />
          </div>
          <div className={style.buttonContainer}>
            <Link to={'/dashboard'}><button className={style.cancel}>Cancel</button></Link>
            <button className={style.add}>
              {type === "Add" ? "Add" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddEditBookForm;
