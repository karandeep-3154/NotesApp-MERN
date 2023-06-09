import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  //importing react router files
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './Context/Notes/NoteState';  //importing notestate from context
import Alert from './Components/Alert';
import Login from './Components/Login';
import SignUp from "./Components/SignUp";
import { useState } from 'react';

const App = () => {
  //Alert part
  const [alert, setAlert]= useState(null);
  const showAlert= (message, type)=>{
      setAlert({ message: message, type: type });
      setTimeout(() => {
          setAlert(null);  //disabling alert after 3 sec
      }, 3000);
  }

  return (
    <>
      <NoteState>  {/*wrapping app in notestate so that state got available to all the components & subcomponents*/}
        <Router>
          <Navbar/>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About showAlert={showAlert}/>}/>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}/>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
