import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "sucess");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "sucess");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textutils"
          aboutText="About textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
