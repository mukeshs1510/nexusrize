import "./App.css";
import axios from "axios";
import MarkdownEditor from "./components/MarkdownEditor";

// axios.defaults.baseURL = "http://localhost:8080/"; //local server
axios.defaults.baseURL = "https://nexusrize.onrender.com"; //live server

function App() {
  return (
    <>
      <MarkdownEditor />
    </>
  );
}

export default App;
