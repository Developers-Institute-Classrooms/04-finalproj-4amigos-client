import React, { useEffect } from "react";
import "./App.css";
import "./components/review.css";
import { createReview } from "./services/apiClient";
import StudentFormHeader from "./components/studentformheader";
import ValidateForm from "./components/authdetails";
import ScaleRating from "./components/scale";
import ReviewForm from "./components/review";
import Logo from "./components/logo";
import Dropdown from "./components/dropdown";

function App() {
  // const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    // TODO: connect to getReviews route and have data return
    // const reviews = await getReviews();
    // setReviews(reviews);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    //TODO: alert to be replaced with an onSubmit event that clears the page and returns the summary of reviews submitted, along with a message that says "thanks for completing our review".  So that the reviewer knows their review has been submitted.  This alert is a placeholder only so that the person submitting knows their review has been completed.
    alert("Thank you for completing our review!");

    const inputs = event.target.form.elements;
    const data = {
      reviewer_name: inputs.name.value,
      email: inputs.email.value,
      review_person: inputs.instructor.value,
      term: inputs.chapter.value,
      class_name: inputs.topic.value,
      q1: inputs.content.value,
      q2: inputs.resources.value,
      q3: inputs.knowledge.value,
      q4: inputs.communication.value,
      q5: inputs.timely.value,
      additional_feedback: inputs.comment.value,
    };
    // const newReview =
    await createReview(data);
    // setReviews([...reviews, newReview]);
    event.target.focus();
    // comment ...
    event.target.form.reset();
  };

  return (
    <div className="app">
      <Logo />
      <StudentFormHeader />

      <div className="review-form">
        <form onSubmit={onSubmit}>
          <ValidateForm />
          <Dropdown />
          <ScaleRating />
          <ReviewForm />
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
