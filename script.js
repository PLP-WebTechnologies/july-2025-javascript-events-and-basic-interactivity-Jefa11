// ----------------------------
// Part 1: Event Handling
// ----------------------------
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "🎉 Button was clicked!";
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const questions = document.querySelectorAll(".faq-question");
questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  formSuccess.textContent = "";

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Invalid email address";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});

