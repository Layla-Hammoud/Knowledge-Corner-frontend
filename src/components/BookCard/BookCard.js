import BookCover from "../../assets/images/bookcover.jpg";
import style from "./BookCard.module.css";
const BookCard = () => {
  let rating = 4;
  return (
    <>
      <figure className={style.figure}>
        <img src={BookCover} alt="Book cover" className={style.image} />
        <figcaption className={style.figcaption}>
          <p>
            <strong>Memory</strong>
          </p>
          <p>Hana Hope</p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${rating >= star ? style.filled : ""}`}
              >
                &#9733;
              </span>
            ))}
          </div>
        </figcaption>
      </figure>
    </>
  );
};
export default BookCard;
