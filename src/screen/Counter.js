import React , {useState} from "react";
import './Counter.css';
import { useSelector,useDispatch } from "react-redux";
import { incNumber, decNumber } from "./component/ReduxBtn"

const Counter = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
        return (
         
          <>
             <div classNameName="container">
                <h1>Counter</h1>
                <div classNameName="quantity">
                  <a className="quantity_minus" title="Decrement"
                   onClick={ () => dispatch(decNumber())}><span>-</span></a>
                  <input name="quantity" type="text" className="quantity_input" value={myState} />
                  <a className="quantity_plus" title="Increment"
                       onClick={ () => dispatch(incNumber())}><span>+</span></a>
                </div>
             </div>
          </>
          
        );
    
}

export default Counter;