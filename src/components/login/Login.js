import "./Login.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signUp } from "../../auth/authApi";

function Login() {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const [loginusername, setLoginusername] = useState("");
  const [loginpsswd, setLoginpsswd] = useState("");

  const { error, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function displaySignUp() {
    setSignup(true);
  }
  function displayLogin() {
    setSignup(false);
  }

  function signupfunc(e) {
    e.preventDefault();
    dispatch(
      signUp({
        email: email,
        password: psswd,
      })
    );
    setEmail("");
    setUsername("");
    setPsswd("");
    // displayLogin();
  }

  function signinfunc(e) {
    e.preventDefault();
    dispatch(
      login({
        email: loginusername,
        password: loginpsswd,
      })
    );
    setLoginusername("");
    setLoginpsswd("");
  }

  return (
    <div className="main">
      <div className="layer">
        <div className={`container ${!signup ? "" : "sign-up-mode"}`}>
          <div className="signin-signup">
            <form onSubmit={signinfunc} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fa-solid fa-user" />
                <input
                  type="text"
                  name="fname"
                  autoComplete="off"
                  placeholder="username"
                  value={loginusername}
                  onChange={(e) => setLoginusername(e.target.value)}
                  required
                />
                <div className="formerror" />
              </div>
              <div className="input-field" id="userpassword">
                <i className="fa-solid fa-lock" />
                <input
                  type="password"
                  name="fpassword"
                  autoComplete="off"
                  placeholder="password"
                  value={loginpsswd}
                  onChange={(e) => setLoginpsswd(e.target.value)}
                  required
                />
                <div className="formerror" />
              </div>
              <button type="submit" value="Login">
                Login
              </button>
              {error}
            </form>

            <form className="sign-up-form" onSubmit={signupfunc}>
              <h2 className="title">Sign up</h2>
              <div className="input-fieldU" id="name">
                <i className="fa-solid fa-user" />
                <input
                  type="text"
                  name="fname"
                  placeholder="firstname"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="formerror" />
              </div>
              <div className="input-fieldU" id="email">
                <i className="fa-solid fa-at" />
                <input
                  type="email"
                  name="femail"
                  placeholder="email"
                  id="useremail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="formerror" />
              </div>

              <div className="input-fieldU" id="password">
                <i className="fa-solid fa-lock" />
                <input
                  type="password"
                  name="fpass"
                  placeholder="password"
                  id="userpassword"
                  value={psswd}
                  onChange={(e) => setPsswd(e.target.value)}
                  required
                />
                <br />
                <div className="formerror" />
              </div>
              <button type="submit" value="Signup" id="btn">
                Sign up
              </button>
              <div id="message" />
            </form>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h1>TuneBag</h1>
                <p>Get a personalised experience, and access all your music</p>
                <button className="btn" id="sign-in-btn" onClick={displayLogin}>
                  Login
                </button>
              </div>
              <img
                src="/Images/undraw_programming_re_kg9v.svg"
                alt=""
                className="image"
              />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h1>TuneBag</h1>
                <p>Get a personalised experience, and access all your music</p>
                <button
                  className="btn"
                  id="sign-up-btn"
                  onClick={displaySignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
