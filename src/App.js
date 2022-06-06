import "./App.css";
import Login from "./components/login/Login";
import useFetchUser from "./hooks/useFetchUser";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      {/* <Hi /> */}
      {/* <Home/> */}
      <Login/>
      {/* <div>hi</div> */}
    </div>
  );
}

export default App;
