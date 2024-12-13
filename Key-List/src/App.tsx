import { useState } from "react";
import { users as defaultUsers } from "./utils";

export default function App() {
  const [data, setData] = useState(defaultUsers);

  const handleClick = (id: number) => {
    const newUser = data.filter((users) => users.id !== id);
    alert(`User with id ${id} has been deleted`);
    setData(newUser);
  };
  return data.map((item) => {
    return (
      <div style={{ display: "block" }}>
        <button
          style={{ width: "100px", margin: "5px" }}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </button>
      </div>
    );
  });
}
