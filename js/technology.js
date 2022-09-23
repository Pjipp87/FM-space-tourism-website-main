const technologyArr = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

$(document).ready(() => {
  var technology = technologyArr[0];
  $("#technology_image").attr("src", technology.images.portrait);
  $("#technology_heading_content").text(technology.name);
  $("#technology_text").text(technology.description);

  $(".technology_btn").click(function () {
    $(".technology_btn").removeClass(" technology_btn-active");
    technology = technologyArr[$(this).attr("data-id")];
    $(this).addClass(" technology_btn-active");
    $("#technology_image").attr("src", technology.images.portrait);
    $("#technology_heading_content").text(technology.name);
    $("#technology_text").text(technology.description);
  });
});
