$(document).ready(function () {
  $("#MenuBtn").click(function () {
    $(".container-links").animate(
      {
        width: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
  });
});
