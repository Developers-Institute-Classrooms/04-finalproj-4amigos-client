import React from "react";
import "./review.css";

const FormHeader = () => {
  return (
    <div className="main-block">
      <form action="/">
        <h1>Course Evaluation Form</h1>
        <p>
          Students we ask for your honest feedback on how this semester was run
          so that we can continuously improve and adjust how we run our
          semesters.
        </p>
      </form>
    </div>
  );
};

export default FormHeader;
