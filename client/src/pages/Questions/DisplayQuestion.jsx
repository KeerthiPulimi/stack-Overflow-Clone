import React from "react";

import QuestionsDetails from "./QuestionsDetails";
import RightSidebar from './../../Components/RightSidebar/RightSidebar';
import LeftSidebar from './../../Components/LeftSidebar/LeftSidebar';

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
