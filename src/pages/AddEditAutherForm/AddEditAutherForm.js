import style from "\./AddEditAuthor.module.css";
function AddEditAutherForm() {
  return (
    <>
    <div className={style.fromContainer}>
      <form className={style.authorForm}>
      <h1 className={style.title}>Add An Auther</h1>
        <div className={style.inputContainer}>
          <label className={style.label}>First Name</label>
          <input className={style.input} type="text" placeholder="Enter First Name" name="FirstName" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Last Name</label>
          <input className={style.input} type="text" placeholder="Enter Last Name" name="LastName" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>DOB</label>
          <input className={style.input} type="date" placeholder="Enter the date of birth" name="DOB" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>nationality</label>
          <input
          className={style.input}
            type="text"
            placeholder="Enter the nationality"
            name="nationality"
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>biography</label>
          <input
          className={style.input}
            type="text"
            placeholder="Enter the biography"
            name="biography"
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>LinkedIn Link</label>
          <input className={style.input} type="text" placeholder="Enter LinkedIn Link" name="LinkedIn" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Blog Link</label>
          <input className={style.input} type="text" placeholder="Enter Blog Link" name="Blog" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>twitter Link</label>
          <input className={style.input} type="text" placeholder="Enter twitter Link" name="twitter" />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Enter an image of the Author</label>
          <input className={style.input} type="file" name="image"/>
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>rating</label>
          <input className={style.input} type="number" max={5} min={0} placeholder="Enter the rating" name="rating" />
        </div>
        <div className={style.buttonContainer}>
        <button className={style.cancel}>Cancel</button>
        <button className={style.add}>Add</button>
        </div>
      </form>
      </div>
    </>
  );
}
export default AddEditAutherForm;