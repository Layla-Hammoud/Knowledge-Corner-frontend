import BookCover from "../../assets/images/bookcover.jpg";
import style from "./BookCard.module.css";
import Stars from "../Stars/Stars";
const BookCard = ({isSmall}) => {
  let rating = 4;
  const size = {
    width: isSmall ? '200px' : '250px',
    height: isSmall ? '250px' : '350px',
  };
  return (
    <>
      <figure className={style.figure} >
        <img src={BookCover} alt="Book cover" className={style.image} style={size}/>
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
