function checkForVisibility() {
  var lead = document.querySelectorAll(".lead");
  lead.forEach(function (lead) {
    if (isElementInViewport(lead)) {
      lead.classList.add("leadVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

// Function to update the year
function updateYear() {
  const yearElement = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

// Update the year when the page loads
document.addEventListener("DOMContentLoaded", updateYear);

// Optional: Update the year when the tab becomes visible again
document.addEventListener("visibilitychange", updateYear);
