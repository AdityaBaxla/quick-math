//import { useState } from "react";
//import { generateNums } from "./components/scripts/makeNumbers";
import AdditionQuiz from "./components/AdditionQuiz";
import NumberTyping from "./components/NumberTyping";
import TypingArea from "./components/TypingArea";
import SelectionBar from "./components/SelectionBar";
import { Box } from "@chakra-ui/react";

function App() {
  //const [count, setCount] = useState(0);
  //const numArr = generateNums(10);
  return (
    <>
      <Box bg={"blackAlpha.900"} minHeight={"100vh"}>
        <SelectionBar/>
        <TypingArea />
      </Box>
    </>
  );
}

export default App;
