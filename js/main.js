/* ==========================================================================
   main.js  —  the only JavaScript on the site.
   It does four small things:
     1. Theme: remembers dark/light choice and wires up the toggle button
     2. Mobile menu: opens/closes the menu on small screens
     3. Footer: writes the current year
     4. Images: shows a clear notice if a local image file is missing
   (All page content is plain HTML — edit it directly in the .html files.)
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "portfolio-theme"; // same key as the original site

  /* ---------- 1. THEME ---------- */
  function savedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function applyTheme(isDark) {
    root.classList.toggle("dark", isDark);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  // Default is dark, unless the visitor previously chose light.
  applyTheme(savedTheme() ? savedTheme() === "dark" : true);

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var nextDark = !root.classList.contains("dark");
      applyTheme(nextDark);
      try { localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light"); } catch (e) {}
    });
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var menuBtn = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      setMenu(menu.hidden); // if hidden -> open, otherwise close
    });
    // Close the menu after tapping a link
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  /* ---------- 3. FOOTER YEAR ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- 4. MISSING IMAGE NOTICE ----------
     If an <img> file isn't in the assets folder yet, show a dashed box
     telling you which file to add, instead of a broken-image icon. */
  function showMissing(img) {
    if (img.dataset.missingHandled) return;
    img.dataset.missingHandled = "true";
    var box = document.createElement("div");
    box.className = "img-missing";
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", img.alt || "Missing image");
    box.textContent = "Image not found — add file: " + img.getAttribute("src").replace(/^\.\.\//, "");
    img.replaceWith(box);
  }

  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () { showMissing(img); });
    // Handles images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) showMissing(img);
  });
})();
