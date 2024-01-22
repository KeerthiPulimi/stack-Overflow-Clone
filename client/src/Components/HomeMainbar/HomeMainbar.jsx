import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
// import { useSelector } from "react-redux";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate()

  const questionsList = [
    {
      "_id": 1,
      "upVote": 3,
      "downVote": 2,
      "noofAnswers": 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be",
      "questionTags": ["java", "node js", "react js"],
      "userPosted": "mano",
      "userId": 1,
      "askedOn": "jan 1",
      "answer": [
        {
          "answerBody": "Answer",
          "userAnswered": "kumar",
          "answeredOn": "jan 2",
          "userId": 1
        }
      ]
    },
    {
      "_id": 2,
      "upVote": 3,
      "downVote": 2,
      "noofAnswers": 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be",
      "questionTags": ["java", "node js", "react js"],
      "userPosted": "mano",
      "userId": 1,
      "askedOn": "jan 1",
      "answer": [
        {
          "answerBody": "Answer",
          "userAnswered": "kumar",
          "answeredOn": "jan 2",
          "userId": 2
        }
      ]
    },
    {
      "_id": 3,
      "upVote": 3,
      "downVote": 2,
      "noofAnswers": 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be",
      "questionTags": ["java", "node js", "react js"],
      "userPosted": "mano",
      "userId": 3,
      "askedOn": "jan 1",
      "answer": [
        {
          "answerBody": "Answer",
          "userAnswered": "kumar",
          "answeredOn": "jan 2",
          "userId": 3
        }
      ]
    },
  ]

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button className="ask-btn" onClick={checkAuth}>
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>

            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
