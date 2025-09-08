import './style.css'

window.addEventListener('scroll', () => {
  let scroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  scroll = Math.min(1, Math.max(0, scroll)); // Clamp the value between 0 and 1
  document.documentElement.style.setProperty(
    "--relativeScrollPosition",
    scroll
  );
});

// Keep the current year updated
const $year = document.querySelector("[data-currentyear]");
if ($year) {
  $year.textContent = new Date().getFullYear();
}

const scrollRevealElements = document.querySelectorAll("[data-reveal]");

// IntersectionObserver is a browser API that allows you to observe when an element enters or exits the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // change data-reveal attribute to true
      entry.target.setAttribute("data-reveal", "true");
    }
  });
}, {
  threshold: 1, // Only reveal an element when 50% of it is visible
});

scrollRevealElements.forEach((element) => {
  observer.observe(element);
});