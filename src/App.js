import React, { useState, useEffect } from "react";
import "./App.css";
import { createReview, getReviews } from "./services/apiClient";
import FormHeader from "./components/formheader";
import NameAuth from "./components/authdetails";
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

  const onClick = async (e) => {
    e.preventDefault();
    const { review } = e.target.elements;
    const newReview = await createReview({ description: review.value });
    setReviews([...reviews, newReview]);
    review.value = "";
    review.focus();
  };

  return (
    <div className="app">
      <Logo />
      <FormHeader />
      <NameAuth />

      <div className="review-form">
        <Dropdown />
        <ReviewForm />
      </div>
    </div>
  );
}
export default App;
