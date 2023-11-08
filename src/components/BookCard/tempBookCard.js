import { NavLink } from "react-router-dom";

import AllBooksStyle from "../../components/AllBooks/AllBooks.module.css";

export default function TempBookCard(props) {
  const { bookTitle, image, author, rating, category } = props;

  return (
    <figure className={AllBooksStyle.figure}>
      <NavLink to="/SingleBook">
        <img
          src={`http://localhost:4000/images/${image}`}
          alt="Book cover"
          className={AllBooksStyle.image}
        />
      </NavLink>

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
