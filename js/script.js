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
});
