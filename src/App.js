import "./App.css";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "./hooks/useFetchUser";
import Home from "./components/Home/Home";
function App() {
  const user = useSelector((state) => state.user);
  useFetchUser();
  // console.log(user.user);
  return <div className="App">{!user?.user ? <Login /> : <Home />}</div>;
}

export default App;
