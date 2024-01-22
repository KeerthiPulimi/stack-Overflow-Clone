import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import Avatar from "../../Components/Avatar/Avatar";



const DisplayAnswer = ({ question, handleShare }) => {



  const handleDelete = (answerId, noOfAnswers) => {
    alert("deleted")
  };
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans.id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
