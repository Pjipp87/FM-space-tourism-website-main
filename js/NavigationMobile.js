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
    $(".destinationMenu").toggleClass(" z_null");
    $(".btn-explorer-outer").toggleClass(" z_null");
    $(".container_technology_menu").toggleClass(" z_null");
    $(".slideMenu").toggleClass("z_null");
    $(".nav-menu-logo", this).toggle();
  });

  $(".btn-explorer").click(() => {
    $(".btn-explorer-outer").toggleClass("btn-explorer-outer-pressed");
  });
});
