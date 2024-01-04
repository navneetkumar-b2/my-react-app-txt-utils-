//last seen :29/10/23 , 17/12/23 , 4/1/23

import About from "./components/about.js";
import TextForm from "./components/TextForm.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import Alert from "./components/alert.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled !", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <main>
          <Routes>
            <Route
              // path="/"  index can also be used inplace of path
              index
              element={
                <TextForm
                  title="Enter Text Below To do something"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About title="About Us" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
