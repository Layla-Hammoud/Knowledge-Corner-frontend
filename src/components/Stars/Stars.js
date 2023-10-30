import  style  from "./Stars.module.css";
const Stars = ({ rating, stars }) => {
  return (
    <>
      <span className= {`${rating >= stars ? style.filled : ""}`}>&#9733;</span>
    </>
  );
};
export default Stars;
