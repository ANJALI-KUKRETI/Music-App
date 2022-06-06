import { signOut } from "firebase/auth";
import "./Home.css";
import Left from "./Left/Left";
import { auth } from "../../firebase";

function Home() {
  const logoutHandler = () => {
    signOut(auth);
  };
  return (
    <div className="mainPage">
      <div className="layer2">
        <Left />
      </div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Home;
