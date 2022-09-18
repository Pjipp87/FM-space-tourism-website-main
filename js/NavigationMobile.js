$(document).ready(function () {
  /*   $(".container-links").animate(
    {
      display: "toggle",
    },
    "fast"
  );
 */
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
