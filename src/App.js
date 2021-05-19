import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/section/Header";
import AboutMe from "./component/section/AboutMe";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
