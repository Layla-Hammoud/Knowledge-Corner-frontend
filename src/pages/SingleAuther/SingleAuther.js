import BookCard from "../../components/BookCard/BookCard";
import BookCover from "../../assets/images/james-clear-headshot-v1-e1538685972972.jpg";
import style from "./SingleAuthor.module.css";
import Stars from "../../components/Stars/Stars";
function SingleAuther() {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }
  let author = {
    _id: "6537743da6237905d7cc76f2",
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01T00:00:00.000Z",
    nationality: "US",
    biography: "A software developer.",
    twitterLink: "https://twitter.com/johndoe",
    linkedinLink: "https://www.linkedin.com/in/johndoe",
    blogLink: "https://johndoe.com",
    rating: "4.5",
    image: "default-image.png",
    __v: 0,
  };
  return (
    <section className={style.singleAuthorContainer}>
      <div className={style.mainInfoContainer}>
        <article className={style.imgContainer}>
          <img className={style.image} src={BookCover} alt="AuthorPhoto" />
          <div className={style.StarSingleContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={author.rating} />
            ))}
          </div>
        </article>
        <article className={style.infoContainer}>
          <h3 className={style.info}>{author.firstName} {author.lastName}</h3>
          <p className={style.info}>
            {author.biography}
          </p>
          <p className={style.info}>
            Birth Date :
            <span className={style.spantext}>{formatDate(author.dob)}</span>{" "}
          </p>
          <p className={style.info}>
          nationality :<span className={style.spantext}>{author.nationality}</span>
          </p>
          <p className={style.info}>
            Twitter :<span className={style.spantext}>{author.twitterLink}</span>
          </p>
          <p className={style.info}>
            Website :
            <span className={style.spantext}>{author.blogLink}</span>
          </p>
          <p className={style.info}>
            LinkedIn :<span className={style.spantext}>{author.blogLink}</span>
          </p>
        </article>
      </div>
      <h4 className={style.suggestedBookTitle}>More books</h4>
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
export default SingleAuther;
