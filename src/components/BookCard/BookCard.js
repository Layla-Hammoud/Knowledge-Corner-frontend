import BookCover from "../../assets/images/bookcover.jpg";
import style from "./BookCard.module.css";
import Stars from "../Stars/Stars";
const BookCard = ({isSmall,book}) => {
  let rating = 4;
  const size = {
    width: isSmall ? '200px' : '250px',
    height: isSmall ? '250px' : '350px',
  };
  return (
    <>
      <figure className={style.figure} >
        <img src={`${process.env.REACT_APP_PATH}/images/${book.image}`} alt="Book cover" className={style.image} style={size}/>
        <figcaption className={style.figcaption}>
          <p>
            <span>{book.title}</span>
          </p>
          <div className={style.StarContainer}> 
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={book.rating}/>
            ))}
          </div>
        </figcaption>
      </figure>
    </>
  );
};
export default BookCard;
