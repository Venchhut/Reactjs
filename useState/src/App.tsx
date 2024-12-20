import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(0);
  return (
    <div style={{ display: "inline" }}>
      <h1 style={{ textAlign: "center" }}>{user}</h1>
      <button onClick={() => setUser(user - 1)}>Decrement</button>
      <button onClick={() => setUser(user + 1)}>Increment</button>
    </div>
  );
};

export default App;
