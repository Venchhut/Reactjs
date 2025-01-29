import { useState } from "react";
import "./style.css";

const JokeGen = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await response.json();
      console.log(data);
      setJoke(data.joke || "No joke found, try again!");
    } catch (error) {
      setJoke("Something went wrong, try again!");
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="joke-container">
      <h1> Programming Jokes :)</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Generating..." : "Generate Joke"}
      </button>
      {joke && <p className="joke-text">{joke}</p>}
    </div>
  );
};

export default JokeGen;
