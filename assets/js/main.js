(function () {
  var root = document.documentElement;

  // Dark / light toggle (remembers choice)
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mobile nav
  var navBtn = document.querySelector(".nav-toggle");
  var tabs = document.querySelector(".tabs");
  if (navBtn && tabs) {
    navBtn.addEventListener("click", function () {
      var open = tabs.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
