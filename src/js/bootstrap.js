document.addEventListener("DOMContentLoaded", function () {
  if (typeof bootstrap !== "undefined") {
    // Bootstrap - Initialisation des composants interactifs (Tooltips)
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
});
