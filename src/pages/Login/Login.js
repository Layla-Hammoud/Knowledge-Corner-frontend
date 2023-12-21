import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./Login.module.css";
import SignUp from "../../components/SignUp/SignUp";
import { Helmet } from "react-helmet-async";
import good from "../../assets/icons/good (1).png";
function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className={style.loginPageContainer}>
      <Helmet>
        <title>Hi!! log in please :(</title>
        <link rel="shortcut icon" href={good}></link>
      </Helmet>

      
      {login ? (
        <div className={style.loginFormContainer}>
          <h2>Log In</h2>
          <LoginForm />
          <p>
            Don't have an account?
            <span
              onClick={() => setLogin(false)}
              className={style.actionButton}
            >
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div className={style.loginFormContainer}>
          <h2>Sign Up</h2>
          <SignUp />
          <p>
            Already have an account?
            <span onClick={() => setLogin(true)} className={style.actionButton}>
              Login
            </span>
          </p>
        </div>
      )}
      <div className={style.loginHeroSide}>
        <h1>
          “Unlock your world of words with every login. Your stories are waiting
          to be shared.”
        </h1>
      </div>
    </div>
  );
}

export default Login;
