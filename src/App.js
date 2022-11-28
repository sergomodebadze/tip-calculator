import "./App.css";
import Form from "./components/Form/Form";
import Img from "../src/images/logo.svg";

function App() {
  return (
    <div>
      <div className="imga">
        <img src={Img} alt="img" />
      </div>
      <div className="App">
        <Form />
      </div>
    </div>
  );
}

export default App;
