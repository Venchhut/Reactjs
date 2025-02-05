// string with state

// import { useState } from "react";

// const App = () => {
//   const [inputText, setInputText] = useState("");

//   return (
//     <div>
//       <input
//         placeholder="enter username"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <p>useName: {inputText}</p>
//     </div>
//   );
// };

// export default App;

// 2 Boolean State
import { useState } from "react";
import "./App.css";
const App = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="container">
      <div className="box">
        <div className="toggle">
          <p>{isOn ? "Enabled" : "Disabled"}</p>
          <button onClick={() => setIsOn((prev) => !prev)}>
            {isOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
