import React, { useState, useEffect } from "react";

const AdditionQuiz = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10; // You can adjust the total number of questions

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
    const newCorrectAnswer = newNum1 + newNum2;

    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
    setCorrectAnswer(newCorrectAnswer);
    setIsCorrect(false);
  };

  const handleSubmit = () => {
    const userAnswerInt = parseInt(userAnswer, 10);

    if (userAnswerInt === correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion < totalQuestions) {
      generateQuestion();
    }
  };

  return (
    <div>
      <h1>Addition Quiz</h1>
      {currentQuestion <= totalQuestions ? (
        <div>
          <p>
            What is {num1} + {num2}?
          </p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button onClick={handleSubmit}>Submit</button>
          {isCorrect === true && (
            <p style={{ color: "green" }}>Correct! Well done!</p>
          )}
          {isCorrect === false && (
            <p style={{ color: "red" }}>
              Incorrect. The correct answer is {correctAnswer}.
            </p>
          )}
        </div>
      ) : (
        <div>
          <p>Quiz completed!</p>
          <p>
            You got {score} out of {totalQuestions} questions correct.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdditionQuiz;
