// Mobile nav toggle — shared across all pages
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var tabs = document.querySelector(".nav-tabs");

  if (toggle && tabs) {
    toggle.addEventListener("click", function () {
      var isOpen = tabs.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close menu after choosing a tab (mobile)
    tabs.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        tabs.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Projects page: company dropdown switches which panel is shown
  var companySelect = document.getElementById("company-select");
  if (companySelect) {
    companySelect.addEventListener("change", function () {
      document.querySelectorAll(".tab-panel").forEach(function (panel) {
        panel.classList.toggle("active", panel.id === "panel-" + companySelect.value);
      });
    });
  }

  // Photo carousels — one photo visible at a time, prev/next arrows + counter.
  // Used for both the 3 photos in a project entry and the gallery photos.
  document.querySelectorAll(".carousel").forEach(function (carousel) {
    var slides = carousel.querySelectorAll(".carousel-slide");
    var counter = carousel.querySelector(".carousel-counter");
    var prevBtn = carousel.querySelector(".carousel-btn.prev");
    var nextBtn = carousel.querySelector(".carousel-btn.next");
    var current = 0;

    if (!slides.length) return;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === current);
      });
      if (counter) counter.textContent = (current + 1) + " / " + slides.length;
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(current + 1); });

    show(0);
  });
});
