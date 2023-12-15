import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.loginPageContainer}>
      <div className={style.loginFormContainer}>
        <h2>Log In</h2>
        <LoginForm />
      </div>
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
