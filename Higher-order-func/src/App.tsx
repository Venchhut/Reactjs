import { useState } from "react";

//simple function
const App = () => {
  const [fontSize, setFontSize] = useState(16);
  // function click1() {
  //   setFontSize(12);
  // }
  // function click2() {
  //   setFontSize(14);
  // }
  // function click3() {
  //   setFontSize(16);
  // }

  //use higher order function

  function click(fontSize: number) {
    return function () {
      setFontSize(fontSize as number);
    };
  }

  const click1 = click(12);
  const click2 = click(14);
  const click3 = click(16);
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <button onClick={click1}>12</button>
      <button onClick={click2}>14</button>
      <button onClick={click3}>16</button>
    </div>
  );
};

export default App;
