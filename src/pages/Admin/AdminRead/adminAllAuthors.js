import React from "react";
import adminAllBooksStyle from "./adminAllBooks.module.css";
import x from "../../../assets/icons/862px-Delete-button 1.svg";
import update from "../../../assets/icons/Vector (4).svg";

function adminAllAuthors({ authors , handleDeleteAuthor }) {

  return (
    <div className={adminAllBooksStyle.allBooks}>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Nationality</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
              <td>{author.dob}</td>
              <td>{author.nationality}</td>
              <td>{author.rating}</td>
              <td className={adminAllBooksStyle.buttonContainer}>
                <button className={adminAllBooksStyle.updateDelete}>
                  <img src={update} alt="update" />
                </button>
                <button className={adminAllBooksStyle.updateDelete}>
                  <img src={x} alt="delete" onClick={() => {
                        handleDeleteAuthor(author._id);
                      }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default adminAllAuthors;
