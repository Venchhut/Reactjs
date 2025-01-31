import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [course, setCourse] = useState<string>("");
  const [student, setStudent] = useState<
    { name: string; age: number; course: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !course) return;

    const newStudent = { name, age, course };
    setStudent([...student, newStudent]);
    setName("");
    setAge(0);
    setCourse("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              type="number"
              placeholder="Enter your age"
            />
          </div>
          <div className="input-group">
            <label htmlFor="course">Course</label>
            <input
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              type="text"
              placeholder="Enter your course"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      {student.length > 0 && (
        <div className="student-list">
          {student.map((i, index) => (
            <div key={index} className="student-card">
              <p>
                <strong>Name:</strong> {i.name}
              </p>
              <p>
                <strong>Age:</strong> {i.age}
              </p>
              <p>
                <strong>Course:</strong> {i.course}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
