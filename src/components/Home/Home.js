import { signOut } from "firebase/auth";
import "./Home.css";
import Left from "./left/Left";
import { auth } from "../../firebase";
import Right from "./right/Right";

function Home() {
  // const logoutHandler = () => {
  //   signOut(auth);
  // };
  return (
    <div className="mainPage">
      <div className="layer2">
        <Left />
        <Right/>
      </div>
      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>
  );
}

export default Home;
