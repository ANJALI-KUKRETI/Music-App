import "./App.css";
import Login from "./components/login/Login";
import useFetchUser from "./hooks/useFetchUser";
function App() {
  return (
    <div className="App">
      {/* <Hi /> */}
      <Login />
      {/* <div>hi</div> */}
    </div>
  );
}

export default App;
