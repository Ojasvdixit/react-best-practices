import React, { useState } from 'react'

const StatesConcept = () => {

  const [count,setCount]= useState(0);

  function handleIncrement(){
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);

  }
  console.log('count',count)

  return (
    <div>
      <button onClick={handleIncrement}>Count {count}</button>
    </div>
  )
}

export default StatesConcept