import React, { useEffect, useState } from "react";
import { generateNums } from "./scripts/makeNumbers";
import { Heading, Container, Text, Box } from "@chakra-ui/react";

const TypingArea = () => {
  // chakra styling
  const typingTextProp = {
    p: "10px",
    color: "blue.400",
    fontWeight: "bold",
    m: "10px",
    textAlign: "center",
    ":hover": {
      fontSize: "3xl",
    },
  };

  const [typedNumbers, setTypedNumbers] = useState<string>("");

  //getting data quiz data from genNums
  const quizArr = generateNums(10);
  const a = 1,
    b = 1;
  a + b;
  useEffect(() => {
    // handeling keyboard numbers entered when enter pressed, compare wtih the correct option
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/[0-9]/.test(e.key)) {
        setTypedNumbers((prev) => prev + e.key);
      } else if (e.key == "Backspace") {
        setTypedNumbers((prev) => prev.slice(0, -1));
      } else if (e.key == "Enter") {
        // check typedNumbers against ans and change setTyped num To ''
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <Container p="50px" color={"rgb(0, 66, 56)"} fontWeight={"bold"}>
        <Box paddingTop={"10em"}>
          <Heading size={"4xl"}>Quick Math</Heading>
        </Box>

        <Text sx={typingTextProp} fontSize={"6xl"}>
          {typedNumbers} _
        </Text>
      </Container>
    </div>
  );
};

export default TypingArea;
