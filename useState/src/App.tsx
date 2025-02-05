import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        placeholder="enter username"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>useName: {inputText}</p>
    </div>
  );
};

export default App;
