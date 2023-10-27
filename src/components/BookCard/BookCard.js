import BookCover  from "../../assets/images/bookcover.jpg";
const BookCard = () => {
  return (
    <>
      <figure>
        <img src={BookCover} alt="Book cover" />
        <figcaption>
          <p>Memory</p>
          <p>Hana Hope</p>
        </figcaption>
      </figure>
    </>
  );
};
export default BookCard;
