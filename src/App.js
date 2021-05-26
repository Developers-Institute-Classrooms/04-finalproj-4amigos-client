import React, { useState, useEffect } from "react";
import "./App.css";
import { createReview, getReviews } from "./services/apiClient";
import StudentFormHeader from "./components/studentformheader";
import ValidateForm from "./components/authdetails";
import ScaleRating from "./components/scale";
import ReviewForm from "./components/review";
import Logo from "./components/logo";
import Dropdown from "./components/dropdown";

function App() {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const reviews = await getReviews();
    setReviews(reviews);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { review } = event.target.elements;
    const newReview = await createReview({ description: review.value });
    setReviews([...reviews, newReview]);
    review.value = "";
    review.focus();
  };

  return (
    <div className="app">
      <Logo />
      <StudentFormHeader />
      <ValidateForm />

      <div className="review-form">
        <form onSubmit={onSubmit}>
          <Dropdown />
          <ScaleRating />
          <ReviewForm />
          <button type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
