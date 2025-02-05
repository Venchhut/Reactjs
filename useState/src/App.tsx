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

// import { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <div className="container">
//       <div className="box">
//         <div className="toggle">
//           <p>{isOn ? "Enabled" : "Disabled"}</p>
//           <button onClick={() => setIsOn((prev) => !prev)}>
//             {isOn ? "ON" : "OFF"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// 2 object state
import { useState } from "react";
const App = () => {
  const [username, setUsername] = useState({
    name: "welcome",
    age: 20,
  });
  const handleClick = () => {
    setUsername((prev) => ({
      ...prev,
      age: prev.age + 1,
      name: prev.name + "!",
    }));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>Student</h2>
        <p>Name:{username.name}</p>
        <p>Age:{username.age}</p>
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  );
};

export default App;
