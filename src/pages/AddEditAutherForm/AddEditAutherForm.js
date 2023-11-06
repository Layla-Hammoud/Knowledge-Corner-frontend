import style from "./AddEditAuthor.module.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddEditAutherForm() {
  let type = "Add";
  let Author = {
    _id: "6548020acc8eb8ee83c3eb62",
    firstName: "nahla",
    lastName: "amir",
    dob: "2023-10-31T00:00:00.000Z",
    biography: "I am a very good author",
    blogLink: "",
    rating: "4",
    image: "public/images/image-1699217930732-182439190.png",
    __v: 0,
  };
  const resetForm = () => {
    const form = document.getElementById("AuthorForm");
    form.reset();
  };

  const handleSuccessAlert = () => {
    const message = type === 'Add'? 'The author is added' :  'The author is edited'
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
      className: "custom-waiting-toast"
    });
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  const AddEditAuther = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFormData = new FormData();
    const imageInput = e.target.querySelector('#imageInput'); 
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
      showWaitingToast()
      axios
        .post("http://localhost:4000/api/authors", newFormData)
        .then((response) => {
          console.log("Request was successful:", response.data);
          handleSuccessAlert()
          resetForm();
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
          handleErrorAlert(error.message)
        });
    } else if (type === "Edit") {
      showWaitingToast()
      axios
        .patch(`http://localhost:4000/api/authors/${Author._id}`, newFormData)
        .then((response) => {
          console.log("Request was successful:", response.data);
          handleSuccessAlert()
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
          handleErrorAlert(error.message)
        });
    }
  };

  return (
    <>
    <ToastContainer />
      <div className={style.fromContainer}>
        <form
          className={style.authorForm}
          id="AuthorForm"
          onSubmit={AddEditAuther}
        >
          <h1 className={style.title}>
            {type === "Add" ? "Add an author" : "Edit an author"}
          </h1>
          <div className={style.inputContainer}>
            <label className={style.label}>First Name</label>
            <input
              className={style.input}
              type="text"
              required
              placeholder="Enter First Name"
              name="firstName"
              defaultValue={type === "Edit" ? Author.firstName : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Last Name</label>
            <input
              className={style.input}
              type="text"
              required
              placeholder="Enter Last Name"
              name="lastName"
              defaultValue={type === "Edit" ? Author.lastName : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>DOB</label>
            <input
              className={style.input}
              type="date"
              defaultValue={
                type === "Edit" && Author.dob ? formatDate(Author.dob) : ""
              }
              placeholder="Enter the date of birth"
              name="dob"
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>nationality</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter the nationality"
              name="nationality"
              defaultValue={type === "Edit" ? Author.nationality : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label} required>
              biography
            </label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter the biography"
              name="biography"
              defaultValue={type === "Edit" ? Author.biography : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>LinkedIn Link</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter LinkedIn Link"
              name="linkedinLink"
              defaultValue={type === "Edit" ? Author.linkedinLink : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Blog Link</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter Blog Link"
              name="blogLink"
              defaultValue={type === "Edit" ? Author.blogLink : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>twitter Link</label>
            <input
              className={style.input}
              type="text"
              placeholder="Enter twitter Link"
              name="twitterLink"
              defaultValue={type === "Edit" ? Author.twitterLink : ""}
            />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>Enter an image of the Author</label>
            <input className={style.input} type="file" name="image" id="imageInput" />
          </div>
          <div className={style.inputContainer}>
            <label className={style.label}>rating</label>
            <input
              className={style.input}
              type="number"
              max={5}
              min={0}
              placeholder="Enter the rating"
              name="rating"
              defaultValue={type === "Edit" ? Author.rating : ""}
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
export default AddEditAutherForm;
