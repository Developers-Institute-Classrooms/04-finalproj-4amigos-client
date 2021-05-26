import React from "react";
import "./review.css";

const ScaleRating = () => {
  return (
    <div className="scale-rating" action="/">
      <h3>Rate this course using the following scale:</h3>
      <p>1 - Rarely meets expectations</p>
      <p>2 - Sometimes meets expectations</p>
      <p>3 - Meets expectations</p>
      <p>4 - Frequently exceeds expectations</p>
      <p>5 - Consistently exceeds expectations</p>
    </div>
  );
};

export default ScaleRating;
