import { useState } from "react";
import style from "./LoginFrom.module.css";

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className={style.loginWrapper}>
        <label>Email</label>
        <input
          name="email"
          value={credentials.email}
          className={style.loginInput}
          type="text"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          value={credentials.password}
          className={style.loginInput}
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className={style.loginBtnWrapper}>
        <button
          className={style.loginSubmit}
          onClick={(e) => {
            e.preventDefault();
            console.log("Button");
          }}
        >Sign In</button>
      </div>
    </>
  );
}

export default LoginForm;
