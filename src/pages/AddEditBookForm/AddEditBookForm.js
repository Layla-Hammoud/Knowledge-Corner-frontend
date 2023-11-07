import style from "./AddEditBookForm.module.css";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function AddEditBookForm() {
  const book = {
    _id: "6548f5bb0a13fcd6c98d1ae3",
    title: "soul",
    ISBN: "098876",
    publicationDate: "2023-11-01T00:00:00.000Z",
    description:
      "Good thinkers are always in demand. A person who knows how may always have a job, but the person who knows why will always be his boss.",
    nbPages: 885,
    authorId: "653774a9ecc137fc0d211526",
    categoryId: "65362ad892ebe34bdbce5170",
    image: "image-1699280315765-963972417.jpg",
    language: "English",
    rating: 1,
    createdAt: "2023-11-06T14:18:35.796Z",
    updatedAt: "2023-11-06T14:18:35.796Z",
    __v: 0,
  };
  const type = "Edit";
  const handleSuccessAlert = () => {
    const message = type === "Add" ? "The book is added" : "The book is edited";
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleErrorAlert = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const showWaitingToast = () => {
    toast("Please wait...", {
      position: "top-right",
      autoClose: 100,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      className: "custom-waiting-toast",
    });
  };
  const [optionCategory, setOptionCategory] = useState(null);
  const [authors, setAuthors] = useState(null);

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
    const newFormData = new FormData();
    const imageInput = e.target.querySelector("#imageInput");
    if (imageInput.files.length <= 0) {
      // Remove the "image" field if no file is selected
      formData.delete("image");
    }
    for (const pair of formData.entries()) {
      const [key, value] = pair;
      if (value !== "") {
        newFormData.append(key, value);
      }
    }
    if (type === "Add") {
      showWaitingToast();
      axios
        .post("http://localhost:4000/api/books", formData)
        .then((response) => {
          console.log("Request was successful:", response.data);
          handleSuccessAlert();
          resetForm();
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
          handleErrorAlert(error.message);
        });
    } else if (type === "Edit") {
      console.log(formData);
      showWaitingToast();
      axios
        .patch(`http://localhost:4000/api/books/${book._id}`, formData)
        .then((response) => {
          console.log("Request was successful:", response.data);
          handleSuccessAlert();
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
          handleErrorAlert(error.message);
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
      <ToastContainer />
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
              id="imageInput"
              required={type === "Add"}
            />
          </div>
          <div className={style.buttonContainer}>
            <button className={style.cancel}>Cancel</button>
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
