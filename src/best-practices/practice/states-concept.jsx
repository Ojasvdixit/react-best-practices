import React, { useEffect, useState } from 'react'

const StatesConcept = () => {


  const [count,setCount]= useState(0);
  const items= [
    {
      id:1,
      name:'Rahul'
    },
     {
      id:2,
      name:'Sanskar'
    }, {
      id:3,
      name:'Ojasv'
    },
  ]

  function handleIncrement(){
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);

  }
   if(count>0){
    console.log('count',count)
   }
   else{
    useEffect(()=>{
      console.log('useEffect count',count)
    },[])
   }


  return (
    <div>
      <button onClick={handleIncrement}>Count {count}</button>
      {
        items.map((item,index)=>{
          return (
            <div key={item.id}>
            {item.name}
             <input></input>
          </div>
          )
        })
      }
    </div>
  )
}

export default StatesConcept