const body = document.querySelector('[data-js="body"]');
const toggleBtn = document.querySelector('[data-js="darkmode__toggle"]');

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
