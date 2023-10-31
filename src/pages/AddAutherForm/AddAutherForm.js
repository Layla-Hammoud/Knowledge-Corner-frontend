import style from "../../Form.module.css";
function AddAuther() {
  return (
    <>
      <h1>Add An Auther</h1>
      <form>
        <div className={style.inputContainer}>
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" name="FirstName" />
        </div>
        <div className={style.inputContainer}>
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" name="LastName" />
        </div>
        <div className={style.inputContainer}>
          <label>DOB</label>
          <input type="date" placeholder="Enter the date of birth" name="DOB" />
        </div>
        <div className={style.inputContainer}>
          <label>nationality</label>
          <input
            type="text"
            placeholder="Enter the nationality"
            name="nationality"
          />
        </div>
        <div className={style.inputContainer}>
          <label>biography</label>
          <input
            type="text"
            placeholder="Enter the biography"
            name="biography"
          />
        </div>
        <div className={style.inputContainer}>
          <label>LinkedIn Link</label>
          <input type="text" placeholder="Enter LinkedIn Link" name="LinkedIn" />
        </div>
        <div className={style.inputContainer}>
          <label>Blog Link</label>
          <input type="text" placeholder="Enter Blog Link" name="Blog" />
        </div>
        <div className={style.inputContainer}>
          <label>twitter Link</label>
          <input type="text" placeholder="Enter twitter Link" name="twitter" />
        </div>
        <div className={style.inputContainer}>
          <label>Enter an image of the Author</label>
          <input type="file" name="image"/>
        </div>
        <div className={style.inputContainer}>
          <label></label>
          <input type="number" max={5} min={0} placeholder="Enter the rating" name="rating" />
        </div>
        <div className={style.buttonContainer}>
        <button className={style.cancel}>Cancel</button>
        <button className={style.add}>Add</button>
        </div>
      </form>
    </>
  );
}
export default AddAuther;