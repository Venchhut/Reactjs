import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [allMemeImgs, setAllMemeImgs] = useState<{ url: string }[]>([]);
  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((content) => setAllMemeImgs(content.data.memes));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "topText") setTopText(value);
    if (name === "bottomText") setBottomText(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (allMemeImgs.length > 0) {
      const rand =
        allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
      setRandomImg(rand);
    }
  };

  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button>Generate</button>
      </form>
      <br />
      <div className="meme">
        {randomImg && (
          <>
            <img src={randomImg} alt="meme" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
