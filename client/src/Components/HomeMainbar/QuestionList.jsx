import React from "react";
import Questionss from "./Questionss";
const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Questionss question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionList;