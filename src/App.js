import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { createReview, getReviews } from "./services/apiClient";

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
        <h1>Reviews</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="review-logo">
        <img src="/Review-logo.png" alt="educate/rate logo"></img>
      </div>
      <h1>Reviews</h1>
    </div>

    //     <ul>
    //       {reviews.map((review) => (
    //         <li key={review.id}>{review.description}</li>
    //       ))}
    //     </ul>

    //     <form onClick={onClick}>
    //       <input type="text" id="review" />
    //       <button type="submit">Create Review</button>
    //     </form>
    //   </div>
    // );
  );
}
export default App;
