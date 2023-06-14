// Get the switch element
const input = document.querySelector(".dark-mode");
// Detect if user preference is dark
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// On button click
input.addEventListener("click", function() {
  // Get users preference
  const userSystemPreference = prefersDarkScheme.matches ? "dark" : "light";
  // Choose the class that will be added or removed
  const toggleClass = userSystemPreference === "light" ? "dark" : "light";
  // Add or remove the class on the <html> element
  document.documentElement.classList.toggle(toggleClass);
});