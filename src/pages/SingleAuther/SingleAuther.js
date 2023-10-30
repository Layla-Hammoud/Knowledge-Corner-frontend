import BookCard from "../../components/BookCard/BookCard";
import BookCover from "../../assets/images/james-clear-headshot-v1-e1538685972972.jpg";
import style from "../../SharedStyle.module.css";
import Stars from "../../components/Stars/Stars";
function SingleAuther() {
  let rating = 2;
  return (
    <section>
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
          Birth Date :<strong>November 22, 1983</strong>{" "}
          </p>
          <p className={style.info}>
          Born :<strong> Hamilton, Ohio, US</strong>
          </p>
          <p className={style.info}>
          Twitter :<strong>JamesClear</strong>
          </p>
          <p className={style.info}>
          Website :<strong>http://jamesclear.com</strong>
          </p>
          <p className={style.info}>
          LinkedIn :<strong>JamesClear</strong>
          </p>
        </article>
      </div>
      <h4 className={style.suggestedBookTitle}>More of James Clear books</h4>
      <aside className={style.suggestedBook}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </aside>
    </section>
  );
}
export default SingleAuther;
