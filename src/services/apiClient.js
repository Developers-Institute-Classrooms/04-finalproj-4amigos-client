const createReview = async (body) => {
  const response = await fetch("/api/reviews", {
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
  const response = await fetch("/api/reviews");
  const reviews = await response.json();
  return reviews;
};

export { createReview, getReviews };
