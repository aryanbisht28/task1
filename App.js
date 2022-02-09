import react, {useState} from 'react';
import { NavLink } from "react-router-dom";
import ButtonComp from './component/ButtonComp'
import { Routes ,Route } from 'react-router-dom';
import About from './screen/About';
import Counter from './screen/Counter';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

function App() {

  return (
    <>
    <div className='container'>
      <div>
        <span className='logo'>Task</span>
      </div>
      <nav className='navbar'>
        <NavLink className='menu' to='/'> About </NavLink>
        <NavLink className='menu' to='/counter'> Counter </NavLink>
      </nav>
    </div>
    <Routes>
      <Route path='/' element= {<About />}/>
      <Route path='/counter' element= {<Counter />}/>
    </Routes>
    </>
  );
}

export default App;
