// import { useState } from 'react';
import React , {useState} from 'react'

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const[mode] = useState('dark');
  
  return (
<>
<Navbar title ="Word Counter" about = "About Application " mode={mode}/>
<div className='p-3'>
  <About/>
</div>
<TextForm  heading="Enter the Text to analyze"/>

  </>
  );
}

export default App;
