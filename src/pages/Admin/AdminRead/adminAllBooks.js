import React from "react";
import adminAllBooksStyle from "./adminAllBooks.module.css";
import x from "../../../assets/icons/862px-Delete-button 1.svg";
import update from "../../../assets/icons/Vector (4).svg";

function adminAllBooks({ books }) {

  return (
    <div>
      <div className={adminAllBooksStyle.allBooks}>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>ISBN</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.authorId}</td>
                  <td>{book.categoryId}</td>
                  <td>{book.ISBN}</td>
                  <td>{book.rating}</td>
                  {/* <div className={adminAllBooksStyle.buttonContainer}>
                    <button className={adminAllBooksStyle.updateDelete}>
                      <img src={update} alt="update" />
                    </button>
                    <button className={adminAllBooksStyle.updateDelete}>
                      <img src={x} alt="delete" />
                    </button>
                  </div> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default adminAllBooks;
