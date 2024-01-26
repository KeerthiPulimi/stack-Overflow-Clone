import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./AskQuestion.css";



const AskQuestion = () => { 
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (e) {
            if (questionTitle && questionBody && questionTags) {
                alert("ok")
              
            } else alert("Please enter all the fields");
        } else alert("Login to ask question");
        setQuestionBody("")
        setQuestionTags("")
        setQuestionTitle("")
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            setQuestionBody(questionBody + "\n");
        }
    };
    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                               <p> Be specific and imagine you're asking a question to another
                                person
                            </p>
                            <input
                                type="text"
                                id="ask-ques-title"
                                value={questionTitle}
                                onChange={(e) => {
                                    setQuestionTitle(e.target.value);
                                }}
                                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>
                                Include all the information someone would need to answer your
                                question
                            </p>
                            <textarea
                                name=""
                                id="ask-ques-body"
                                value={questionBody}
                                onChange={(e) => {
                                    setQuestionBody(e.target.value);
                                }}
                                cols="30"
                                rows="10"
                                onKeyPress={handleEnter}
                            ></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input
                                type="text"
                                id="ask-ques-tags"
                                value={questionTags}
                                onChange={(e) => {
                                    setQuestionTags(e.target.value.split(" "));
                                }}
                                placeholder="e.g. (xml typescript wordpress)"
                            />
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Reivew your question"
                        className="review-btn"
                    />
                </form>
            </div>
        </div>
    );
};

export default AskQuestion;