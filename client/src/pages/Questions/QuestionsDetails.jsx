import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

import moment from "moment";
import copy from "copy-to-clipboard";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";
import Avatar from "../../Components/Avatar/Avatar";

const QuestionsDetails = () => {
  const { id } = useParams();


  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();

  const User = 1
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {

        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    alert("deleted")
  };

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {

    }
  };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      alert("image clicked")
    }
  };

  const questionsList = [
    {
      id: 1,
      "upVote": 3,
      "downVote": 2,
      noOfAnswers: 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be",
      "questionTags": ["java", "node js", "react js"],
      "userPosted": "mano",
      "userId": 1,
      "askedOn": "jan 1",
      "answer": [
        {
          "answerBody": "Answer",
          "userAnswered": "kumari",
          "answeredOn": "jan 21",
          "userId": 1
        }
      ]
    },
    {
      id: 2,
      "upVote": 3,
      "downVote": 2,
      noOfAnswers: 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be 2",
      "questionTags": ["java", "node js", "react js"],
      "userPosted": "mano",
      "userId": 1,
      "askedOn": "jan 1",
      "answer": [
        {
          "answerBody": "Answer",
          "userAnswered": "kuma",
          "answeredOn": "jan 22",
          "userId": 2
        }
      ]
    },
    {
      id: 3,
      "upVote": 3,
      "downVote": 2,
      noOfAnswers: 3,
      "questionTitle": "What is a function?",
      "questionBody": "It meant to be 3",
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
        ,{
          "answerBody": "Answer",
          "userAnswered": "kumar",
          "answeredOn": "jan 2",
          "userId": 3
        }
      ]
    },
  ]
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.filter((question) => { return question.id === parseInt(id, 10); }).map((question) => (
            <div key={question.id}>
              <section className="question-details-container">
                <h1>{question.questionTitle}</h1>
                <div className="question-details-container-2">
                  <div className="question-votes">
                    <img
                      src={upvote}
                      alt=""
                      width="18"
                      className="votes-icon"
                      onClick={handleUpVote}
                    />
                    <p>{question.upVote - question.downVote}</p>
                    <img
                      src={downvote}
                      alt=""
                      width="18"
                      className="votes-icon"
                      onClick={handleDownVote}
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <p className="question-body">{question.questionBody}</p>
                    <div className="question-details-tags">
                      {question.questionTags.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                    <div className="question-actions-user">
                      <div>
                        <button type="button" onClick={handleShare}>
                          Share
                        </button>
                        {id === question?.userId && (
                          <button type="button" onClick={handleDelete}>
                            Delete
                          </button>
                        )}
                      </div>
                      <div>
                        <p>asked {moment(question.askedOn, "MMM D").fromNow()}</p>

                        <Link
                          to={`/Users/${question.userId}`}
                          className="user-link"
                          style={{ color: "#0086d8" }}
                        >
                          <Avatar
                            backgroundColor="orange"
                            px="8px"
                            py="5px"
                            borderRadius="4px"
                          >
                            {question.userPosted.charAt(0).toUpperCase()}
                          </Avatar>
                          <div>{question.userPosted}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {question.noOfAnswers !== 0 && (
                <section>
                  <h3>{question.noOfAnswers} Answers</h3>
                  <DisplayAnswer
                    key={question.id}
                    question={question}
                    handleShare={handleShare}
                  />
                </section>
              )}
              <section className="post-ans-container">
                <h3>Your Answer</h3>
                <form
                  onSubmit={(e) => {
                    handlePostAns(e, question.answer.length);
                  }}
                >
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={Answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  ></textarea>
                  <br />
                  <input
                    type="submit"
                    className="post-ans-btn"
                    value="Post Your Answer"
                  />
                </form>
                <p>
                  Browse other Question tagged
                  {question.questionTags.map((tag) => (
                    <Link to="/Tags" key={tag} className="ans-tags">

                      {tag}
                    </Link>
                  ))}
                  or
                  <Link
                    to="/AskQuestion"
                    style={{ textDecoration: "none", color: "#009dff", marginLeft: "5px" }}
                  >

                    ask your own question.
                  </Link>
                </p>
              </section>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;