const createReview = async (body) => {
  const response = await fetch("/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

// const getReviews = async () => {
//   const response = await fetch("/api/review");
//   return await response.json();
// };

const instructors = async () => {
  const response = await fetch("/api/instructors");
  return await response.json();
};

export { createReview, instructors };
