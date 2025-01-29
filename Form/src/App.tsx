import { useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Welcome to React</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleInputEmail}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handleInputPassword}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
