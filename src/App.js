import "./App.css";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "./hooks/useFetchUser";
import Home from "./components/Home/Home";
function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      {/* <Hi /> */}
      <Home/>
      {/* <Login /> */}
      {/* <div>hi</div> */}
    </div>
  );
=======
  const user = useSelector((state) => state.user);
  useFetchUser();
  console.log(user.user);
  return <div className="App">{!user?.user ? <Login /> : <Home />}</div>;
>>>>>>> 582e566ca2efce7ab07e1fa00d42aaf9a8972dd3
}

export default App;
