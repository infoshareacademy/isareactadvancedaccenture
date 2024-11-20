// src/App.js
import React, { useState, useEffect } from "react";

function SlowComponent() {
  const [val, setVal] = useState(0);

  // Symulacja długiego renderowania
  useEffect(() => {
    const start = performance.now();
    while (performance.now() - start < 2000) {}
    setVal(1);
  }, []);

  return <div>Slow Component Rendered {val}</div>;
}

function FastComponent() {
  return <div>Fast Component Rendered</div>;
}

function ToggleComponent() {
  return <div>Toggle Component Rendered</div>;
}

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Toggle</button>
      {show && <ToggleComponent />}
    </>
  );
}

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>React Profiler Example</h1>
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <Toggle />
      <SlowComponent />
      <FastComponent />
    </div>
  );
}

export default App;
