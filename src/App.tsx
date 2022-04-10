import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = () => {
  const [feedback, setFeedback] = useState([]);
  return (
    <>
      <Header
        bgColor={"rgba(0,0,0,0.4)"}
        textColor={"#ff6a95"}
        text={"hello"}
      />
      {/*<div className="container">*/}
      {/*  <FeedbackItem feedback={feedback} />*/}
      {/*</div>*/}
    </>
  );
};

export default App;
