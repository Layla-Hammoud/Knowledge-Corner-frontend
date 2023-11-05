import style from "./AddEditAuthor.module.css";
import axios from "axios";
function AddEditAutherForm() {
  let type = "Add";
  let Author =     {
    _id: "65452a3b37a6bf4b5790c80e",
    firstName: "rayan",
    lastName: "hammoud",
    nationality: "Lebanese",
    biography: "I am a very good author",
    rating: "5",
    image: "images/default-image.png",
    __v: 0
};
  const resetForm = () => {
    const form = document.getElementById("AuthorForm");
    form.reset();
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  const AddEditAuther = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    for (const [name, value] of formData.entries()) {
      if (value !== "") formDataObject[name] = value;
    }
    const image = formData.get("image");
    if (image.size === 0) {
      delete formDataObject.image;
    }
    if (type === "Add") {
      axios
        .post("http://localhost:4000/api/authors", formDataObject)
        .then((response) => {
          console.log("Request was successful:", response.data);
          resetForm();
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
        });
    } else if (type === "Edit") {
      console.log(formDataObject.image)
      axios
        .patch(`http://localhost:4000/api/authors/${Author._id}`, formDataObject)
        .then((response) => {
          console.log("Request was successful:", response.data);
        })
        .catch((error) => {
          console.error("Error while making the request:", error);
        });
    }
  };

  return (
    <>
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
              defaultValue={type === "Edit" && Author.dob ? formatDate(Author.dob) : ""}
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
            <input className={style.input} type="file" name="image"  />
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
