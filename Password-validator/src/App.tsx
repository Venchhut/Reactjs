import { useState } from "react";
import validator from "validator";
import "./App.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
      })
    ) {
      setErrorMessage("✅ Password is Strong");
    } else {
      setErrorMessage("⚠️ Password is Weak");
    }
  };

  return (
    <div className="container">
      <div className="password-checker">
        <h1>Password Strength Checker</h1>
        <div className="input-container">
          <label>Enter your password</label>
          <input
            type="password"
            onChange={(e) => validate(e.target.value)}
            placeholder="Enter password"
            className="password-input"
          />
        </div>
        {errorMessage && (
          <p className={errorMessage.includes("Strong") ? "strong" : "weak"}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
