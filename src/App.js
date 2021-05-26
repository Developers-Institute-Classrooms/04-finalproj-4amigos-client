import React, { useState, useEffect } from "react";
import "./App.css";
import { getReviews } from "./services/apiClient";
import FormHeader from "./components/formheader";
import NameAuth from "./components/authdetails";
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

  const onSubmit = async((event) => {
    event.preventDefault();
    const { review } = event.target.elements;
    const newReview = await createReview({ description: review.value });
    setReviews([...reviews, newReview]);
    review.value = "";
    review.focus();
  });

  return (
    <div className="app">
      <Logo />
      <FormHeader />
      <NameAuth />

      <div className="review-form">
        <Dropdown />
        <ScaleRating />
        <ReviewForm />
      </div>
    </div>
  );
}
export default App;
