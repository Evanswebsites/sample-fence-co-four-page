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
