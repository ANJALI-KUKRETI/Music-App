import { useState } from "react";
import classes from "./Login.module.css";

function Login() {

    const [signup,setSignup]=useState(false);
    const [signin,setSignin]=useState(true);


    function submitFunction(){
    
    //     var returnval = true;
    //     // clearErrors();
    //     // Signup function start here
    //     let name = document.forms['myForm']['fname'].value;
    //     if(name.length < 3){
    //         // seterror("name", "*First name should three characters!");
    //         returnval = false;
    //     }
    //     let email = document.forms['myForm']['femail'].value;
    //     var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    //     if (!ck_email.test(email)){
    //         // seterror("email","*You must enter a valid email address.");
    //         returnval = false;
    //     } 
    //     let password = document.forms['myForm']['fpass'].value;
    //     if(password.length < 6){
    //         // seterror("password", "*Password should be minimum 6 characters!");
    //         returnval = false;
    //     }
    //     if((name.length > 3 && ck_email.test(email)) || (ck_email.test(email) && password.length > 6)){
    //         // Success Message
    //         document.getElementById("message").innerHTML="Hurrey! Signup success,Please check you inbox to verify email.";
    
    //         const signup =  "signup";
    //         const IDOfMessage = "message";
    //    document.getElementById(signup ).innerHTML = document.getElementById(IDOfMessage).innerHTML;
            
    //     }
    
     
    //     return returnval;
        
    };
    
function displaySignUp(){
    setSignup(!signup)
        // console.log("hh");
}
function displayLogin(){
    setSignin(!signup)
        // console.log("hh");
}
// if(!signup)

console.log(signup);
console.log(signin);


  return (
    <div className={classes.container}>
      <div className={classes.signin_signup}>
        <div className={classes.signin}>
          <form
            action="/mysigninaction.js"
            name="mysigninForm"
            // onsubmit="return validateSiginForm()"
            method="post"
            className={classes.sign_in_form}
          >
            <h2 className={classes.title}>Login</h2>
            <div className={classes.input_field} id="userlogin">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="fname" placeholder="username" required />
              <div className={classes.formerror}></div>
            </div>
            <div className={classes.input_field} id="userpassword">
              <i className="classes.fa-solid fa-lock"></i>
              <input
                type="password"
                name="fpassword"
                placeholder="password"
                required
              />
              <div className={classes.formerror}></div>
            </div>
            {/* <!-- <input type="submit" value="Login" class="btn"> --> */}
            <button type="submit" value="Login" className={classes.btn1}>
              Login
            </button>
          </form>
        </div>
        <div className={classes.forgot}>
          <form
            action="/myaction2.js"
            name="forgotForm"
            // onsubmit="return validateForgotForm()"
            method="post"
            className={classes.forgotpassword}
          >
            <h2 className={classes.title}>Forgot password?</h2>
            <div className={classes.forgotPassword}>
              <div className={classes.input_field} id="forgotEmail">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="femail"
                  placeholder="username"
                  required
                />
                <div className={classes.formerror}></div>
              </div>
              {/* <!-- <input type="submit" value="submit" class="btn"> --> */}
              <button type="submit" value="submit" id="btn2">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Here right SingUp form started. --> */}
        <div className={classes.signup} id="signup">
          <form
            action="# "
            name="myForm"
            method="post"
            className={classes.sign_up_form}
            id="signUpForm"
          >
            {/* <!-- <div id="message"></div> --> */}
            <h2 className={classes.title}>Sign up</h2>

            <div className={classes.input_fieldU} id="name">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="fname"
                placeholder="firstname"
                id="username"
                // onkeyup="isEmpty()"
                required
              />
              <div className={classes.formerror}></div>
            </div>
            <div className={classes.input_fieldU} id="email">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                name="femail"
                placeholder="email"
                id="useremail"
                // onkeyup="isEmpty()"
                required
              />
              <div className={classes.formerror}></div>
            </div>
            {/* <!-- <div class="input-field" id="whatsapp">
                    <i class="fa-brands fa-whatsapp-square"></i>
                    <input type="number" name="fwhatsapp" placeholder="Whatsapp" required/>
                    <div class="formerror"></div>
                </div> --> */}
            <div className={classes.input_fieldU} id="password">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="fpass"
                placeholder="password"
                id="userpassword"
                // onkeyup="isEmpty()"
                required
              />
              <br />
              <div className={classes.formerror}></div>
            </div>

            {/* <!-- <input type="submit" value="Signup" onclick="submitFunction()" id="ab" class="btn"> --> */}
            <button
              type="submit"
              value="Signup"
            //   onClick={submitFunction}
              disabled
              id="btn"
            >
              Sign up
            </button>
            <div className={classes.message}></div>
            {/* <!-- <a href="https://lara.co.in" id="message">Hurrey! Signup success, Please check you inbox to verify email.</a> --> */}
          </form>
        </div>
      </div>
      {/* <!-- Here Animation panel started --> */}
      <div className={classes.panels_container}>
        <div className={`${classes.panel} ${classes.left_panel}`}>
          <div className={classes.content}>
            <h3>Student Of Lara Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
            <button  className={`${classes.btn} ${signin?classes.sign_in_mode: 'sign_in_btn'}`} onClick={displayLogin} >
              Sign In
            </button>
          </div>
          <img
            src="/Images/undraw_programming_re_kg9v.svg"
            alt=""
            className={classes.image}
          />
        </div>
        <div className={`${classes.panel} ${classes.right_panel}`}>
          <div className={classes.content}>
            <h3>New Student Of Lara Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
            <button className={`${classes.btn} ${signup?classes.sign_up_mode: 'sign_up_btn'}`}  onClick={displaySignUp}>
              Sign Up
            </button>
          </div>
          <img
            src="/Images/undraw_online_learning_re_qw08.svg"
            alt=""
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
