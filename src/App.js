import react, {useState} from 'react';
import ButtonComp from './component/ButtonComp'
import './App.css';

function App() {

  const [counter , setCounter] = useState(0)

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <span className='text'>{counter}</span>
      <ButtonComp counter = {counter}  action = {setCounter}/>
      
    </div>
  );
}

export default App;
