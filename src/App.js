// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
  

// } from "react-router-dom";


function App() {
  const [enable, setenable] = useState('Enable Dark Mode');
  const [textColor, settextColor] = useState('dark')
  const [darkMode, setdarkMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }

  const toggleMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      setenable("Enable light mode");
      settextColor("light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enable", "success");
      document.title = "Text Util- Dark Mode"

    }
    else {
      setdarkMode("light");
      setenable("Enable Dark mode");
      settextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Ligth Mode has been enable", "success");

    }
  }
  // const toggleModeGreen = () => {
  //   if (darkMode === "light") {
  //     setdarkMode("green");
  //     setenable("Enable light mode");
  //     settextColor("light");
  //     document.body.style.backgroundColor ="#042743";
  //     showAlert("Dark Mode has been enable","success");

  //   }
  //   else if(darkMode === "dark"){
  //     setdarkMode("green");
  //     setenable("Enable Dark mode");
  //     settextColor("dark");
  //     document.body.style.backgroundColor ="white";
  //     showAlert("Ligth Mode has been enable","success");

  //   }
  // }

  return (
    <>

      <Navbar title="Text-Util" 
       darkMode={darkMode} enable={enable} toggleMode={toggleMode} textColor={textColor} />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container">
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/about" element={<About/>} />


            <Route exact path="/" element={<TextForm heading="Enter your text here to analyzie" darkMode={darkMode} showAlert={showAlert} />}/>


            
          </Routes>
        </BrowserRouter> */}

        <TextForm heading="Enter your text here to analyzie" darkMode={darkMode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
