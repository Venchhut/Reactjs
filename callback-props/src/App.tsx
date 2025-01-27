import React, { useState } from "react";

// Parent Component
const ParentComponent: React.FC = () => {
  // State to store data from child
  const [dataFromChild, setDataFromChild] = useState<string>("");

  // Callback function to receive data from child
  const handleDataFromChild = (data: string): void => {
    setDataFromChild(data); // Update the state with the data received from child
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      {/* Passing the callback function as a prop to the child */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

// Child Component
interface ChildComponentProps {
  sendDataToParent: (data: string) => void; // Type for the callback function
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  sendDataToParent,
}) => {
  // Function to send data to parent
  const sendData = (): void => {
    sendDataToParent("Hello from Child!"); // Call parent's callback function with the data
  };

  return (
    <div>
      <h2>Child Component</h2>
      {/* Button that triggers sending data to parent */}
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ParentComponent;
