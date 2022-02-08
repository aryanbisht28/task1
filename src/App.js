import react, {useState} from 'react';
import { Link } from "react-router-dom";
import ButtonComp from './component/ButtonComp'
import { Routes ,Route } from 'react-router-dom';
import About from './screen/About';
import Counter from './screen/Counter';
import './App.css';


function App() {

  return (
    <>
    <Link to='/'> About </Link>
    <Link to='/counter'> Counter </Link>
    <Routes>
      <Route path='/' element= {<About />}/>
      <Route path='/counter' element= {<Counter />}/>
    </Routes>
    </>
  );
}

export default App;
