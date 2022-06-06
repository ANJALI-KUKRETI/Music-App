<<<<<<< HEAD
import './Home.css'
import Left from './left/Left'
import Right from './right/Right'
function Home(){
return(
    <div className='mainPage'>
        <div className='layer2'>
            <Left/>
            <Right/>
        </div>
=======
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
>>>>>>> 582e566ca2efce7ab07e1fa00d42aaf9a8972dd3
    </div>
  );
}

export default Home;
