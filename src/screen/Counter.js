import React , {useState} from "react";
import ButtonComp from "../component/ButtonComp";

const Counter = () => {
    
        const [counter , setCounter] = useState(0)

        return (
         
          <div className='App'>
            <h1>Counter App</h1>
            <span className='text'>{counter}</span>
            <ButtonComp counter = {counter}  action = {setCounter}/>
            
          </div>
          
        );
    
}

export default Counter;