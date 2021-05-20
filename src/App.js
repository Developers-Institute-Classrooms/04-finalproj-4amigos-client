import React, { useState, useEffect } from "react";
import "./App.css";
import { createReview, getReviews } from "./services/apiClient";
import ReviewForm from "./components/review";

function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const reviews = await getReviews();
    setReviews(reviews);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClick = async (e) => {
    e.preventDefault();
    const { review } = e.target.elements;
    const newReview = await createReview({ description: review.value });
    setReviews([...reviews, newReview]);
    review.value = "";
    review.focus();
  };

  if (isLoading) {
    return (
      <div className="app">
        <div>
          <img
            className="review-logo"
            src="/Review-logo.png"
            alt="educate/rate logo"
          />
        </div>
        <div className="review-form">
          <ReviewForm />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Reviews</h1>

      <div>
        <img
          className="review-logo"
          src="/Review-logo.png"
          alt="educate/rate logo"
        />
      </div>
      <div className="review-form">
        <ReviewForm />
      </div>
    </div>
  );
}
export default App;
