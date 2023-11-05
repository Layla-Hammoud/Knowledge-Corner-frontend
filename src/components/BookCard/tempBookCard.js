import React from "react";
import AllBooksStyle from "../../components/AllBooks/AllBooks.module.css";

export default function TempBookCard(props) {
  const { bookTitle, image, author, rating, category } = props;
  // console.log(authorId)
  return (
    <figure className={AllBooksStyle.figure}>
      <img
        src={`http://localhost:4000/images/${image}`}
        alt="Book cover"
        className={AllBooksStyle.image}
      />
      <figcaption className={AllBooksStyle.figcaption}>
        <p>
          <strong>{bookTitle}</strong>
        </p>
        <p> {author}</p>
        <p>{category}</p>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${rating >= star ? AllBooksStyle.filled : ""}`}
            >
              &#9733;
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
