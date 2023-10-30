import BookCover from "../../assets/images/bookcover.jpg";
import style from "./BookCard.module.css";
import Stars from "../Stars/Stars";
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
          <div className={style.StarContainer}> 
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={rating}/>
            ))}
          </div>
        </figcaption>
      </figure>
    </>
  );
};
export default BookCard;
