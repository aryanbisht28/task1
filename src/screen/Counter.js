import React , {useState} from "react";
import ButtonComp from "../component/ButtonComp";
import './Counter.css';


const Counter = () => {
    
        const [counter , setCounter] = useState(0)

        return (
         
          <div className='App'>
            <h1>Counter App</h1>
            <span className='text'>{counter}</span>
            <ButtonComp className='btn' counter = {counter}  action = {setCounter}/>
          </div>
          
        );
    
}

export default Counter;