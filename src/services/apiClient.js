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

const instructors = async () => {
  const response = await fetch("/api/instructorList");
  const reviews = await response.json();
  return reviews;
};

module.exports = { instructors };
