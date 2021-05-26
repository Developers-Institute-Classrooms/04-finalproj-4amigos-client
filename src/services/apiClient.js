<<<<<<< HEAD
// const createReview = async (body) => {
//   const response = await fetch("/api/reviews", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   const review = await response.json();
//   return review;
// };
=======
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
>>>>>>> 2eb3c90a976428c35c1c02667e9aa0134334ea69

const getReviews = async () => {
  const response = await fetch("/api/review");
  const reviews = await response.json();
  return reviews;
};

module.exports = { getReviews };
