import style from "../../Form.module.css";
function AddBookForm() {
  return (
    <>
      <h1>Launch book</h1>
      <form>
        <div className={style.inputContainer}>
          <label>Title</label>
          <input type="text" placeholder="Enter Title" name="title" />
        </div>
        <div className={style.inputContainer}>
          <label>Language</label>
          <input type="text" placeholder="Enter the language" name="language" />
        </div>
        <div className={style.inputContainer}>
          <label>Pages</label>
          <input type="number" placeholder="Enter the pages" name="pages" />
        </div>
        <div className={style.inputContainer}>
          <label>Publication's date</label>
          <input type="date" placeholder="Enter the date" name="date" />
        </div>
        <div className={style.inputContainer}>
          <label>ISBN</label>
          <input type="number" placeholder="Enter the ISBN" name="ISBN" />
        </div>
        <div className={style.inputContainer}>
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter the description"
            name="description"
          />
        </div>
        <div className={style.inputContainer}>
          <label>Select an Author:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <label>Select a Category:</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <label>Enter an image</label>
          <input type="file" />
        </div>
        <div className={style.buttonContainer}>
        <button className={style.cancel}>Cancel</button>
        <button className={style.add}>Add</button>
        </div>
      </form>
    </>
  );
}
export default AddBookForm;
