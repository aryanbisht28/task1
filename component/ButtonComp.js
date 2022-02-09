import React, {useState} from 'react'

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
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default ButtonComp
