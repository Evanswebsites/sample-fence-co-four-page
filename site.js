// Small helpers. The pages work without this file; it only adds two conveniences.

// 1. Keep the year in the footer current, so it never looks out of date.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// 2. Demo form: while the form's action is "#", show a message instead of sending.
//    On a real site, set the form's action to your form service's address
//    (see README.md) and this block steps aside.
var form = document.querySelector("form[data-demo-form]");
if (form) {
  form.addEventListener("submit", function (event) {
    var action = form.getAttribute("action") || "#";
    if (action.charAt(0) === "#") {
      event.preventDefault();
      form.querySelector(".form-status").textContent =
        "This is a demo form, so nothing was sent. On a real site, requests arrive in the owner's email.";
    }
  });
}

// 3. Motion: ease list items in as they scroll into view. Items already on screen
//    are left alone, and nothing happens for visitors who prefer reduced motion.
//    Delete this block and the "Motion" section of styles.css to remove it all.
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var items = document.querySelectorAll(
    ".menu li, .rows > *, .steps li, .quote, .contact-list li, .hours, .form, .cta-band .wrap"
  );
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); seen.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) return;               // already visible on load
    var siblings = el.parentElement ? el.parentElement.children : [];
    el.style.setProperty("--i", Math.min(Array.prototype.indexOf.call(siblings, el), 5));
    el.classList.add("reveal");
    seen.observe(el);
  });
})();
