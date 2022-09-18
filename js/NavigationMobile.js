$(document).ready(function () {
  $(".nav-element").click(() => {
    $(".container-links").animate(
      {
        width: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
    $("img", this).toggle();
  });

  $("#MenuBtn").click(() => {
    $(".container-links").animate(
      {
        width: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
    $(".nav-menu-logo", this).toggle();
    $(".btn-explorer-outer").toggleClass("btn-explorer-outer-pressed");
  });

  $(".btn-explorer").click(() => {
    $(".btn-explorer-outer").toggleClass("btn-explorer-outer-pressed");
  });
});
