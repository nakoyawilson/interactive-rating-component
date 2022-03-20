const ratingsForm = document.getElementById("ratings-form");
const ratings = document.getElementById("ratings");
const thanks = document.getElementById("thanks");

ratingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userRating = document.querySelector('input[name="rating"]:checked');
  if (userRating !== null) {
    ratings.classList.toggle("hide-section");
    thanks.classList.toggle("hide-section");
    document.getElementById("user-choice").innerHTML = userRating.value;
  }
});
