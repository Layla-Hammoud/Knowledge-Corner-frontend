import BookCard from "../../components/BookCard/BookCard";
import BookCover from "../../assets/images/bookcover.jpg";
import style from "./SingleBook.module.css";
import Stars from "../../components/Stars/Stars";
function SingleBook() {

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }
  let book = {
    _id: "6548f5bb0a13fcd6c98d1ae3",
    title: "soul",
    ISBN: "098876",
    publicationDate: "2023-11-01T00:00:00.000Z",
    description:
      "Good thinkers are always in demand. A person who knows how may always have a job, but the person who knows why will always be his boss.",
    nbPages: 885,
    authorId: "653774a9ecc137fc0d211526",
    categoryId: "65362ad892ebe34bdbce5170",
    image: "image-1699280315765-963972417.jpg",
    language: "English",
    rating: 1,
    createdAt: "2023-11-06T14:18:35.796Z",
    updatedAt: "2023-11-06T14:18:35.796Z",
    __v: 0,
  };
  return (
    <section className={style.singleBookContainer}>
      <div className={style.mainInfoContainer}>
        <article className={style.imgContainer}>
          <img className={style.image} src={`http://localhost:4000/images/${book.image}`} alt="Book cover" />
          <div className={style.StarSingleContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={book.rating} />
            ))}
          </div>
        </article>
        <article className={style.infoContainer}>
          <h3 className={style.info}>
            {book.title}
          </h3>
          <h4 className={style.info}>need to check</h4>
          <p className={style.info}>
            Genre:<span className={style.spantext}>need to check</span>
          </p>
          <p className={style.info}>
            Language :<span className={style.spantext}>{book.language}</span>{" "}
          </p>
          <p className={style.info}>
            Published Date :
            <span className={style.spantext}>{formatDate(book.publicationDate)}</span>
          </p>
          <p className={style.info}>
            Pages :<span className={style.spantext}>{book.nbPages}</span>
          </p>
          <p className={style.info}>
            ISBN :<span className={style.spantext}>{book.ISBN}</span>
          </p>
          <p className={style.info}>
            {book.description}
          </p>
        </article>
      </div>
      <h4 className={style.suggestedBookTitle}>Readers also enjoyed</h4>
      <aside className={style.suggestedBook}>
        <BookCard isSmall={true} />
        <BookCard isSmall={true} />
        <BookCard isSmall={true} />
        <BookCard isSmall={true} />
        <BookCard isSmall={true} />
        <BookCard isSmall={true} />
      </aside>
    </section>
  );
}
export default SingleBook;
