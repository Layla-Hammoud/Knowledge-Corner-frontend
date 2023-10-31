import BookCard from "../../components/BookCard/BookCard";
import BookCover from "../../assets/images/bookcover.jpg";
import style from '../../SharedStyle.module.css'
import Stars from "../../components/Stars/Stars";
function SingleBook() {
  let rating=3;
  return (
    <section>
      <div className={style.mainInfoContainer}>
        <article className={style.imgContainer}>
          <img className={style.image} src={BookCover} alt="Book cover"/>
          <div className={style.StarSingleContainer}> 
            {[1, 2, 3, 4, 5].map((star) => (
              <Stars key={star} stars={star} rating={rating}/>
            ))}
          </div>
        </article>
        <article className={style.infoContainer}>
            <h3 className={style.info}>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h3>
            <h4 className={style.info}>James Clear</h4>
          <p className={style.info}>
            Genre:<strong>Self help</strong>
          </p>
          <p className={style.info}>
            Language :<strong>English</strong>{" "}
          </p>
          <p className={style.info}>
            Published Date :<strong>October 16, 2018</strong>
          </p>
          <p className={style.info}>
            Pages :<strong> 544</strong>
          </p>
          <p className={style.info}>
            ISBN :<strong>0735211302</strong>
          </p>
          <p className={style.info}>
            Atomic Habits will reshape the way you think about progress and
            success, and give you the tools and strategies you need to transform
            your habits- -whether you are a team looking to win a championship,
            an organization hoping to redefine an industry, or simply an
            individual who wishes to quit smoking, lose weight, reduce stress,
            or achieve any other goal.
          </p>
        </article>
      </div>
      <h4 className={style.suggestedBookTitle}>Readers also enjoyed</h4>
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
export default SingleBook;
