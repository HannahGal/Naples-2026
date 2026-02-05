// Countdown Timer – shows time + plane emoji
function countdown() {
  const tripDate = new Date("2026-02-05T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = tripDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const sign = distance < 0 ? "-" : "";
  const absDays = Math.abs(days);
  const absHours = Math.abs(hours).toString().padStart(2, '0');
  const absMinutes = Math.abs(minutes).toString().padStart(2, '0');
  const absSeconds = Math.abs(seconds).toString().padStart(2, '0');

  // Format: e.g. "142d 03h 45m 12s ✈️" or "-3d 14h 22m 45s ✈️"
  const message = `${sign}${absDays}d ${absHours}h ${absMinutes}m ${absSeconds}s ✈️`;

  document.getElementById("countdown").innerHTML = message;
}

setInterval(countdown, 1000);
countdown(); // run immediately on load

// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = button.classList.contains("active");

    // Close all others
    document.querySelectorAll(".accordion-btn").forEach(btn => {
      btn.classList.remove("active");
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Toggle current
    if (!isOpen) {
      button.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Tabs functionality
document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(cont => cont.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
