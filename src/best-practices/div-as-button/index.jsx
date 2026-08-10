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
    </div>
  );
}

export default DivAsButton;