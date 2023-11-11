import React, { useEffect, useState } from "react";
import { makeNumbers } from "./scripts/makeNumbers";
import { Heading, Container, Text, Box } from "@chakra-ui/react";

const TypingArea = () => {
  // chakra styling
  const typingTextProp = {
    fontFamily: "monospace",
    p: "10px",
    color: "blue.400",
    fontWeight: "bold",
    m: "10px",
    textAlign: "center",
    ":hover": {
      color: "white",
    },
  };

  const [typedNumbers, setTypedNumbers] = useState<string>("");
  const [question, setQuestion] = useState<[number, number]>([0, 0]);
  const [results, setResults] = useState<number>(0);
  //getting data quiz data from genNums
  //const quizArr = generateNums(10);
  const numberOfQuestions = 10;
  const triggerSetQuestionUseEffect = () => {}
  useEffect( () => {
    console.log('set Quesiton Tiggered ')
  }, [])

  

  useEffect(() => {
    console.log('key handle useEffect triggerd')
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/[0-9]/.test(e.key)) {
        setTypedNumbers((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setTypedNumbers((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        // check typedNumbers against ans and change setTyped num To ''
        const answer = question[0] + question[1];
        if (parseInt(typedNumbers, 10) === answer) {
          // Correct answer handling
          setResults((prev) => prev + 1); // Increase the results count

          
        }
        //set new question after enter pressed
        setQuestion(makeNumbers())
        setTypedNumbers(""); // Clear the typed numbers
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [typedNumbers, question, setResults]);

  return (
    <div>
      <Container p="50px" color={"rgb(0, 66, 56)"} fontWeight={"bold"}>
        <Box paddingTop={"10em"}>
          <Heading size={"4xl"}>Quick Math</Heading>
        </Box>
        {
          <Text sx={typingTextProp} fontSize={"6xl"}>
            {question[0]} + {question[1]} = {typedNumbers}_
          </Text>
        }
      </Container>
    </div>
  );
};

export default TypingArea;
