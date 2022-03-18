const ratingsForm = document.getElementById("ratings-form");
const inputs = document.querySelectorAll(".ratings-input");
const ratings = document.getElementById("ratings");
const thanks = document.getElementById("thanks");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      input.nextElementSibling.classList.add("active");
    }
  });
});

ratingsForm.addEventListener("submit", (e) => {
  const userRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;
  ratings.classList.toggle("hide-section");
  thanks.classList.toggle("hide-section");
  document.getElementById("user-choice").innerHTML = userRating;
  e.preventDefault();
});
