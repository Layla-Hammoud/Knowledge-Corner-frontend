import BookCard from "../../components/BookCard/BookCard";
import BookCover from "../../assets/images/james-clear-headshot-v1-e1538685972972.jpg";
import style from "./SingleAuthor.module.css";
import Stars from "../../components/Stars/Stars";
function SingleAuther() {
  let rating = 2;
  return (
    <section className={style.singleAuthorContainer}>
      <div className={style.mainInfoContainer}>
        <article className={style.imgContainer}>
          <img className={style.image} src={BookCover} alt="AuthorPhoto" />
          <div className={style.StarSingleContainer}> 
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={rating}/>
            ))}
          </div>
        </article>
        <article className={style.infoContainer}>
          <h3 className={style.info}>James Clear</h3>
          <p className={style.info}>
            James Clear is known for his expertise in the field of habit
            formation, decision-making, and continuous improvement. He is an
            author, speaker, and productivity expert. His book, "Atomic Habits,"
            focuses on the science and psychology of habit formation and
            provides practical insights into how small changes can lead to
            remarkable personal and professional transformations.
          </p>
          <p className={style.info}>
          Birth Date :<span className={style.spantext}>November 22, 1983</span>{" "}
          </p>
          <p className={style.info}>
          Born :<span className={style.spantext}> Hamilton, Ohio, US</span>
          </p>
          <p className={style.info}>
          Twitter :<span className={style.spantext}>JamesClear</span>
          </p>
          <p className={style.info}>
          Website :<span className={style.spantext}>http://jamesclear.com</span>
          </p>
          <p className={style.info}>
          LinkedIn :<span className={style.spantext}>JamesClear</span>
          </p>
        </article>
      </div>
      <h4 className={style.suggestedBookTitle}>More of James Clear books</h4>
      <aside className={style.suggestedBook}>
      <BookCard isSmall={true}/>
        <BookCard isSmall={true}/>
        <BookCard isSmall={true}/>
        <BookCard isSmall={true}/>
        <BookCard isSmall={true}/>
        <BookCard isSmall={true}/>
      </aside>
    </section>
  );
}
export default SingleAuther;
