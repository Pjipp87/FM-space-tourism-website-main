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
    $(".btn-explorer-outer").toggleClass("z_null");
    $(".nav-menu-logo", this).toggle();
  });

  $(".btn-explorer").click(() => {
    $(".btn-explorer-outer").toggleClass("btn-explorer-outer-pressed");
  });
});
