import react, {useState} from 'react';
import ButtonComp from './component/ButtonComp'
import { Routes ,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './App.css';
import Menu from './Menu'

function App() {

  const [counter , setCounter] = useState(0)

  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element= {<About />}/>
      <Route path='/contact' element= {<Contact />}/>
    </Routes>
    {/* <About />
    <Contact /> */}
    <div className='App'>
      <h1>Counter App</h1>
      <span className='text'>{counter}</span>
      <ButtonComp counter = {counter}  action = {setCounter}/>
      
    </div>
    </>
  );
}

export default App;
