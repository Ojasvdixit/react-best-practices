function DivAsButton() {
  function handleStart() {
    console.log("start");
  }

  function handleStop() {
    console.log("stop");
  }

  return (
    <div className="card green div-btn">
      <h1>🔆 div as button</h1>

      <input type="text" placeholder="enter your name" />

      <button type="button" onClick={handleStart}>
        Start
      </button>

      <button type="button" onClick={handleStop}>
        Stop
      </button>
     //! Example 2
         <div className="text-white" onClick={()=>{
            console.log('outer div ')
          }
        }> div
          <button className="text-white" onClick={(e)=>{
              // e.stopPropagation()
            console.log('inner button')
          }}>button
            
          </button>
         </div>
    </div>
  );
}

export default DivAsButton;