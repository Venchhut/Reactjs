import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { IconVolume } from "@tabler/icons-react";

interface Definition {
  definition: string;
  example: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Data {
  word: string;
  meanings: Meaning[];
  phonetics: Phonetic[];
}

interface Phonetic {
  text: string;
  audio: string;
}

const App = () => {
  const [word, setWord] = useState<string>("");
  const [data, setData] = useState<Data | null>(null);

  const handleSearch = () => {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSound = () => {
    const audio = new Audio(
      data?.phonetics.find((phonetic) => phonetic.audio)?.audio
    );
    audio.play();
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dictionary</h1>
        <div className="search">
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {data && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ marginRight: "10px" }}>{data.word}</h2>
              <IconVolume
                size={20}
                stroke={1.5}
                onClick={() => handleSound()}
              />
            </div>

            {data.meanings.map((meaning, index) => (
              <div key={index}>
                <p>Part of speech: {meaning.partOfSpeech}</p>
                {meaning.definitions && meaning.definitions.length > 0 && (
                  <div>
                    <p>
                      Definition:{" "}
                      {meaning.definitions[0].definition ??
                        "No definition provided"}
                    </p>
                    <p>
                      Example:{" "}
                      {meaning.definitions[0].example ?? "No example provided"}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
