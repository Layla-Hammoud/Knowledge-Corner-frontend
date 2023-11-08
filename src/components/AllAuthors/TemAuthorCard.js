import { NavLink } from "react-router-dom";
import AllBooksStyle from "../../components/AllBooks/AllBooks.module.css";

function TemAuthorCard(props) {
  const { authorName, image, rating } = props;

  return (
    <figure className={AllBooksStyle.figure}>
      <NavLink to={"/SingleAuthor"}>
        <img
          src={`http://localhost:4000/images/${image}`}
          alt="Book cover"
          className={AllBooksStyle.image}
        />
      </NavLink>

      <figcaption className={AllBooksStyle.figcaption}>
        <p> {authorName}</p>
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
export default TemAuthorCard;
