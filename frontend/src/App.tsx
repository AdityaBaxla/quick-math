import { useState } from "react";
import { generateNums } from "./components/scripts/makeNumbers";
import AdditionQuiz from "./components/AdditionQuiz";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const numArr = generateNums(10);
  return (
    <>
      <div>
        <h1>
          <AdditionQuiz />
        </h1>
      </div>
    </>
  );
}

export default App;