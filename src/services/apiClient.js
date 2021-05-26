const createReview = async (body) => {
  const response = await fetch("/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const review = await response.json();
  return review;
};

const getReviews = async () => {
  const response = await fetch("/api/review");
  const reviews = await response.json();
  return reviews;
};

const instructors = async () => {
  const response = await fetch("/api/instructors");
  const reviews = await response.json();
  return reviews;
};

module.exports = { createReview, getReviews, instructors };
