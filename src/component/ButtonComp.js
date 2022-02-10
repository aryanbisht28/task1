import React, {useState} from 'react'
import './ButtonComp.css'

function ButtonComp(props) {

  const [counter, setCounter] = useState(0)

  const inc = () => {
    
    props.action(props.counter + 1)
  }
  
  
  const dec = () => {
    
    props.action(props.counter - 1)
  }
  return (
    <div>
      <button className='inc' onClick={inc}>+</button>
      <button className='dec' onClick={dec}>-</button>
    </div>
  )
}

export default ButtonComp
