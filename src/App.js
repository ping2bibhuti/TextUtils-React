
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

/* import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [changeText, setChangeText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setChangeText('Enable Light Mode');
      document.body.style.backgroundColor = '#003960';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      setChangeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar textUtils="TextUtils" textHome="Home" textAbout="About Us" mode={mode} toggleMode={toggleMode} changeText={changeText} />
        {/* <Navbar textUtils="TextUtils" textHome="Home" /> */}
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
            </Route>
          </Switch> */}
          <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
