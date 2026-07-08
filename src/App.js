import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useFormState } from 'react-dom';
import About from './Components/About';
import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
  }

  
  const toggleMode = (cls) =>{
    
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#202940'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
   }
  return (
     <>
     
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 

<Alert alert={alert}/>
<div className="container my-3" >
  {/* <TextForm/> */}
  <Routes>
  <Route exact path="/" element={<TextForm />} />
  <Route exact path="/about" element={<About mode={mode} />} />
</Routes> 
  
</div>
 

</>
  );
}

export default App;
